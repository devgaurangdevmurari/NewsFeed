const isQA = true;
/**
 * QA Server
 */
const QA_BASEURL = "https://newsapi.org/v2/everything";
/**
 * Production Server
 */
const PROD_BASEURL = "https://newsapi.org/v2/everything";

export const api = {
  baseUrl: isQA ? QA_BASEURL : PROD_BASEURL,
  newsData: isQA ? QA_BASEURL : PROD_BASEURL,
};

export const NewsAPIKEY = "71167b1f77844f939afec3547a7ee28c";

/* API Methods */
export const GET = "get";
export const POST = "post";
export const PUT = "put";
export const DELETE = "delete";
