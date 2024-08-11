module.exports = ({ env }) => ({
    'users-permission':{
        config:{
                ratelimit:{
                        interval:1,
                        max:1000000
                }
        }
    },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },

      },
    },

  });