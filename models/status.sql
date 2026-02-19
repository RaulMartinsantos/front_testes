SELECT now() json_build_object(
    'version', current_setting('server_version'),
    'connections', json_build_object(
        'current', (SELECT count(*) FROM pg_stat_activity),
        'max', current_setting('max_connections')::int,
        'usage_percent',
            round(
                (SELECT count(*) FROM pg_stat_activity)::numeric
                / current_setting('max_connections')::numeric * 100,
                2
            )
    ),
    'connections_by_state',
        (
            SELECT json_object_agg(state, count)
            FROM (
                SELECT state, count(*) as count
                FROM pg_stat_activity
                GROUP BY state
            ) s
        )
) AS healthcheck;
