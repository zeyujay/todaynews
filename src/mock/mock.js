import Mock from 'mockjs'

const Random = Mock.Random
const Data = []
const LabelData = []
const NewsData = []
const Search = []
const WmLabel = []
const users = []
const usertype = []

for (let i = 0; i < 500; i++) {
  let user = {
    'id':i,
    'jieshao':Random.csentence(2,15),
    'name':'@cname',
    'touxiangurl':Random.image('320x250', '#ffcc33', '#FFF', 'png', 'qqq'),
    'fensinum':Random.natural(0,99999999),
    'smalltype':Random.natural(0,19),
    'type':Random.natural(0,31),
  }
  users.push(user)

}
for (let i = 0; i < 32; i++) {
  let type = {
    'id':i,
    'name':Random.cword(2),
    'smalltype|19':[{'id|+1':0,'type':'@cword(2,5)'}]
  }
  usertype.push(type)
}

for (let i = 2; i <= 62; i++) {
  let label={
    'id':i,
    'label':Random.cword(2,5)
  }
  LabelData.push(label)
}
for (let i = 2; i <= 12; i++) {
  let label={
    'id':i,
    'label':Random.cword(2)
  }
  WmLabel.push(label)
}
for (let i = 0; i < 50; i++) {
  let news = {
    'id':i,
    'title':Random.csentence(20,30),
    'author':Random.cword(2,10),
    // 'date':Random.date(),
    'imgurl|0-3':[{'url':Random.image('320x250', '#ffcc33', '#FFF', 'png', 'qqq')}],
    // 'answernum':Random.natural(),
    'sharenum':Random.natural(0,99999999),
    'readnum':Random.natural(0,99999999),
    'commentnum':Random.natural(0,9999),
    'starnum':Random.natural(0,99999999),
    'type':Random.natural(0,5),
    'contenttype':Random.natural(2,62),
    'ishot':Random.boolean(),
    'keywords':[{'keyword':Random.cword(2,5)},
                {'keyword':Random.cword(2,5)},
                {'keyword':Random.cword(2,5)}
                ]
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
Mock.mock('/wmlabel','post',WmLabel)
Mock.mock('/usertype','post',usertype)
Mock.mock('/users','post',users)
