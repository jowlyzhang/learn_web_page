class CodePath(object):
        return {
            'BFA': {
                'RTM': 'platinum',
                'RC': 'platinum_bfa_rc',
                'DEV': 'platinum_bfa_dev',
            },
            'ST': {
                'RTM': 'platinum_ftx',
                'RC': 'platinum_bi_rc',
                'DEV': 'platinum_bi_dev',
            },
        }.get(key, {}).get(key, None)


a = CodePath()[]
