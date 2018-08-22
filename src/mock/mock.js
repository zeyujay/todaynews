import Mock from 'mockjs'

const Random = Mock.Random
const Data = []
const LabelData = []
const NewsData = []
const Search = []
for (let i = 0; i < 60; i++) {
  let label={
    'id':i,
    'label':Random.cword(2)
  }
  LabelData.push(label)
}
for (let i = 0; i < 10; i++) {
  let news = {
    'id':i,
    'title':Random.csentence(20,20),
    'author':Random.cword(2,10),
    // 'date':Random.date(),
    'imgurl|0-3':[{'url':Random.image('320x250', '#ffcc33', '#FFF', 'png', 'qqq')}],
    // 'answernum':Random.natural(),
    'sharenum':Random.natural(0,99999999),
    'readnum':Random.natural(0,99999999),
    'commentnum':Random.natural(0,99999999),
    'starnum':Random.natural(0,99999999),
    'type':Random.natural(0,5),
    // 'articletype':Random.natural(0,59),
    // 'content':Random.csentence()
  }
  NewsData.push(news)

}
for (let i = 0; i < 20; i++) {
  let searchword={
    'id':i,
    'label':Random.cword(2,5)
  }
  Search.push(searchword)
}
Mock.mock('/','post',LabelData)
Mock.mock('/news','post',NewsData)
Mock.mock(/news\/id/,'post',NewsData)
Mock.mock('/search','post',Search)
