const local: App.I18n.I18nScheme = {
  api: {
    errMsg400: 'Request failed! Please try again later',
    errMsg401: 'Login failed! Please log in again',
    errMsg403: 'The current account does not have permission to access!',
    errMsg404: 'The resource you are accessing does not exist!',
    errMsg405: 'Request method error! Please try again later',
    errMsg408: 'Request timed out! Please try again later',
    errMsg500: 'Service exception!',
    errMsg501: 'Network not implemented!',
    errMsg502: 'Network error!',
    errMsg503: 'Service unavailable, server temporarily overloaded or under maintenance!',
    errMsg504: 'Network timeout!',
    errMsgDefault: 'Request failed!',
  },
  system: {
    title: 'Lemon Template',
    goHome: 'Go Home',
    checkUrl: 'Please check if the URL address is correct, or click to go back to the home page.',
    forbidden: 'You do not have access to this page!',
    notFound: 'The page you are trying to access does not exist!',
    serverError: 'The server is experiencing a small problem, please try again later!',
    errorFallback: 'Sorry, an error occurred, please try again later!',
    refreshAgain: 'Refresh again',
    loading: 'Loading...',
  },
};

export default local;
