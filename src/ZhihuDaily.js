import React, {Component} from 'react';
import StoryListView from './StoryListView';
import LoadLayout from './LoadLayout';

const STORIES_API = 'http://news.at.zhihu.com/api/4/news/latest';

const LOADING = 'loading';
const SUCCESS = 'success';
const  ERROR = 'error';

const DATA = {
    "date": "20170305",
    "stories": [
        {
            "images": [
                "http://pic1.zhimg.com/e86f226f5803330234753154f8903754.jpg"
            ],
            "type": 0,
            "id": 9266344,
            "ga_prefix": "030517",
            "title": "被问过无数次，「涡轮增压到底更省油还是更费油？」"
        },
        {
            "images": [
                "http://pic1.zhimg.com/1127936208671509900a05522cd4d6f4.jpg"
            ],
            "type": 0,
            "id": 9262899,
            "ga_prefix": "030516",
            "title": "盒饭和洋快餐越来越多，传统中餐没落了吗？"
        },
        {
            "images": [
                "http://pic1.zhimg.com/7e837cafe982927d859a102c99e265f0.jpg"
            ],
            "type": 0,
            "id": 9239687,
            "ga_prefix": "030515",
            "title": "手把手教你办理穿越亚欧大陆的一堆签证"
        },
        {
            "title": "厨房多开一个门，大大提升幸福感",
            "ga_prefix": "030514",
            "images": [
                "http://pic4.zhimg.com/e5cdce1efae03738881b7e1da0b3e4e7.jpg"
            ],
            "multipic": true,
            "type": 0,
            "id": 9261466
        },
        {
            "images": [
                "http://pic2.zhimg.com/afdbc61cbce2f2b46880066573327af5.jpg"
            ],
            "type": 0,
            "id": 9266048,
            "ga_prefix": "030513",
            "title": "四年里，我在野外观察着一只鸟的一生"
        },
        {
            "title": "后期只是动动手机，但前期的知识和心思并不轻松",
            "ga_prefix": "030512",
            "images": [
                "http://pic3.zhimg.com/443567e32e725b47c4db2c2f5d49f59a.jpg"
            ],
            "multipic": true,
            "type": 0,
            "id": 9265887
        },
        {
            "images": [
                "http://pic1.zhimg.com/4978eeacc087d354d6aa77913f8e4370.jpg"
            ],
            "type": 0,
            "id": 9265859,
            "ga_prefix": "030512",
            "title": "大误 · 两个老司机的对决"
        },
        {
            "images": [
                "http://pic2.zhimg.com/cda7943b9268a054ca54b9d009251c01.jpg"
            ],
            "type": 0,
            "id": 9265788,
            "ga_prefix": "030511",
            "title": "游戏里的「视野」顺滑地展开，实现起来简单粗暴"
        },
        {
            "images": [
                "http://pic2.zhimg.com/81bfb6e1a7f690f03a09cfa60d112825.jpg"
            ],
            "type": 0,
            "id": 9265358,
            "ga_prefix": "030509",
            "title": "把一个小便池放在美术馆里，怎么就变成「艺术」了？"
        },
        {
            "images": [
                "http://pic3.zhimg.com/643a8fddc1b03056b8da11fbcb36d99a.jpg"
            ],
            "type": 0,
            "id": 9263678,
            "ga_prefix": "030508",
            "title": "熟知套路，人们还是在「被」信用卡薅羊毛"
        },
        {
            "title": "《星际迷航》中一共出现了多少种外星人？",
            "ga_prefix": "030507",
            "images": [
                "http://pic4.zhimg.com/830c6fdbfa152e977afed47801b27a97.jpg"
            ],
            "multipic": true,
            "type": 0,
            "id": 9261488
        },
        {
            "images": [
                "http://pic4.zhimg.com/f784c57d5fcc8fff3f9f92577de835ff.jpg"
            ],
            "type": 0,
            "id": 9265548,
            "ga_prefix": "030507",
            "title": "银行的估值 500 亿和工厂的估值 500 亿，用的是两种算法"
        },
        {
            "images": [
                "http://pic3.zhimg.com/7e7d5f22c5cd8c8433bb464c4e216e06.jpg"
            ],
            "type": 0,
            "id": 9261529,
            "ga_prefix": "030507",
            "title": "共享单车押金去哪了？"
        },
        {
            "images": [
                "http://pic1.zhimg.com/609c0b1634fce61d6a8c4c3aee920800.jpg"
            ],
            "type": 0,
            "id": 9265374,
            "ga_prefix": "030506",
            "title": "瞎扯 · 如何正确地吐槽"
        }
    ],
    "top_stories": [
        {
            "image": "http://pic1.zhimg.com/daf55846a14438e7e453b2dd40578ef8.jpg",
            "type": 0,
            "id": 9266048,
            "ga_prefix": "030513",
            "title": "四年里，我在野外观察着一只鸟的一生"
        },
        {
            "image": "http://pic1.zhimg.com/35d646d6048db701479297c4aa88c450.jpg",
            "type": 0,
            "id": 9261529,
            "ga_prefix": "030507",
            "title": "共享单车押金去哪了？"
        },
        {
            "image": "http://pic1.zhimg.com/50cef8a6502f5b600497fb6695f93590.jpg",
            "type": 0,
            "id": 9265358,
            "ga_prefix": "030509",
            "title": "把一个小便池放在美术馆里，怎么就变成「艺术」了？"
        },
        {
            "image": "http://pic4.zhimg.com/58cd9cdfeb831a999fd569471a39cdcb.jpg",
            "type": 0,
            "id": 9261274,
            "ga_prefix": "030411",
            "title": "「我就是我，你不舒服是你的事，气死你活该」"
        },
        {
            "image": "http://pic2.zhimg.com/edde5b962b2dfbc696d141df5159c0ad.jpg",
            "type": 0,
            "id": 9263190,
            "ga_prefix": "030407",
            "title": "咦，运动品牌的代言人，怎么慢慢从运动员变成了明星？"
        }
    ]
};

class ZhihuDaily extends Component{

  constructor(props){
    super(props);
    this.state = {
      status:LOADING,
      topStories:null,
      stories:DATA.stories,
      errorMessage:null,
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(STORIES_API,{
      method:'GET',
      mode:'no-cors',
      headers:{
          'Content-Type':'application/x-www-form-urlencoded'
      }
    })
    .then((response)=>response.json())
    .then(value=>this.onSuccess(value))
    .catch(error=>this.onError(error));

    // this.loadLocalData();
  }

  loadLocalData(){
    this.onSuccess(DATA);
  }

  onSuccess(value){
    this.setState({
      status:SUCCESS,
      topStories:value.topStories,
      stories:value.stories,
    });
  }

  onError(error){
    this.setState({
      status:ERROR,
      errorMessage:error.message
    });
  }

  render(){
    // return (
    //   <div>
    //     <h1>Zhihu Daily</h1>
    //
    //     <LoadLayout
    //       status={this.state.status}
    //       errorMessage={this.state.errorMessage}
    //       onReloadAction={this.onReloadAction}
    //       renderContent={this.renderListView}/>
    //   </div>
    // );
    return this.renderListView();
  }

  onReloadAction(){
    this.fetchData();
  }

  renderListView(){
    return (<StoryListView stories={this.state.stories} />);
  }
}



export default ZhihuDaily;
