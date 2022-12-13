export const environment = {
  enableProdMode: false,
  api: {
    endpoint: 'https://prive-dev.coinesto.com/',
    routes: {
      crypto_address: {
        endpoint: 'api/v1/crypto_addresses',
        methods: {
          all: ''
        }
      },
      integrated_api_token: {
        endpoint: 'api/v1/integrated_api_token',
        methods: {
          all: '',
          permission_list: '/permission_list'
        }
      },
      earns: {
        endpoint: 'api/v1/earns',
        methods: {
          all: '',
          apy_list: '/apy_list'
        }
      },
      organizations: {
        endpoint: 'api/v1/organizations',
        methods: {
          all: '',
          contact: '/contact'
        }
      },
      integratedAPIToken: {
        endpoint: 'api/v1/integrated_api_tokens',
        methods: {
          all: '',
          permission_list: '/permission_list'
        }
      },
      prices: {
        endpoint: 'api/v1/prices',
        methods: {
          all: ''
        }
      },
      security_key: {
        endpoint: 'api/v1/security_keys',
        methods: {
          all: '',
          register_challenge: '/register_challenge'
        }
      },
      sessions: {
        endpoint: 'api/v1/session',
        methods: {
          all: '',
          sign_in: '/sign_in',
          sign_out: '/sign_out',
          verify_2fa_credential: '/verify_2fa_credential'
        }
      },
      user: {
        endpoint: 'api/v1/user',
        methods: {
          all: '',
          send_reset_password_instructions: '/send_reset_password_instructions',
          reset_password: '/reset_password',
          change_password: '/change_password',
          info: '/info',
          lock_account: '/lock_account',
          send_unlock_instructions: '/send_unlock_instructions'
        }
      }
    }
  },
  siteKey: '6LcjrlkdAAAAAKTX5oo5W7ouVsa1hrRrndthPKqw'
};
