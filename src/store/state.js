let postList = []
let PageSize = 1
let PostContent = '查无此文' // 文章内容详情
let PostTitle = 'gameloveman' // 文章标题
try {
  if (localStorage.postList) {
    postList = localStorage.city
  }
  if (localStorage.PostContent) {
    PostContent = localStorage.PostContent
  }
  if (localStorage.PostTitle) {
    PostTitle = localStorage.PostTitle
  }
  if (localStorage.PageSize) {
    PageSize = localStorage.PageSize
  }
} catch (error) {
}
export default{
  postList: postList,
  PostContent: PostContent,
  PostTitle: PostTitle,
  PageSize: PageSize
}
