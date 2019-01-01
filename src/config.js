const dev = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-83ookv9z4w6k"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://zijwfixni7.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_I3QlJbcDA",
    APP_CLIENT_ID: "4b7367e01j0mfu7ukpcrk6881u",
    IDENTITY_POOL_ID: "ap-southeast-1:b658d35a-d53e-4b39-872a-39ccebca06fe"
  },
  STRIPE_KEY: "pk_test_IUsx3DxA1ZzFhpNne82WVALV",
};

const prod = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-k9shuopyhnjt"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://mp7x5ripwi.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_CcNZDO0FZ",
    APP_CLIENT_ID: "4kqlrjnh1dilrt68a9467bqgtq",
    IDENTITY_POOL_ID: "ap-southeast-1:4f3e5a8d-d38e-4435-aa5c-4649a87f37bd"
  },
  STRIPE_KEY: "pk_test_IUsx3DxA1ZzFhpNne82WVALV",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
