import { http } from '@/lib/request';

/**
 * 文章数据类型
 */
export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  views: number;
  likes: number;
  createTime: string;
  updateTime: string;
  status: 'published' | 'draft' | 'archived';
  coverImage: string;
}

/**
 * 响应数据类型
 */
interface ArticleData {
  list: Article[];
  pagination: {
    pageNum: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// api接口
const api = {
  example: '/api/example', // 示例接口
  article: '/api/article', // 文章列表接口
};

/**
 * 获取示例数据
 * @returns 示例数据
 */
export async function getExampleAPI() {
  return http.get<{ content: string; date: number }>(api.example);
}

/**
 * 获取文章列表
 * @param data 文章列表请求参数
 * @returns 文章列表
 */
export async function postArticleListAPI(data: { pageNum: number; pageSize: number }) {
  return http.post<ArticleData>(api.article, data);
}
