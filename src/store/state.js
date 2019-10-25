let postList = []
let PageSize = 1
let PostContent = '查无此文' // 文章内容详情
let PostTitle = 'gameloveman' // 文章标题
let PostID
try {
  if (localStorage.postList) {
    postList = JSON.parse(localStorage.postList)
    // console.log(postList)
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
  PageSize: PageSize,
  PostID: PostID
}
