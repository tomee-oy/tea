import Mock from 'mockjs'
Mock.mock(/getSampleteaList\.json/, {
  'data|8':[
    {
      sampleteaId: '@integer(1,10)',
      sampleteaImg: 'static/zhanwei.jpg',
      sampleteaIntroduce:'@cparagraph(1)',
      sampleteaName: '@cword(2,4)'    
    }
  ]
})