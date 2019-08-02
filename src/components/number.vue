<template>
    <div id="number">
        <ul>
            <li :key= "index"
                :class= "[number.classname,{change:ischange===index}]"
                v-for= "(number,index) in numbers"
                @click="NumberValue(number.value,isfirst,isdot,iszero)"
                @mousedown="mousedown(index)"
                @mouseup="mouseup()"
            >{{number.value}}</li>
        </ul>
    </div>
</template>

<script>
import bus from '../assets/bus.js';

export default {
    name:"number",
    data: function(){
        return{
            isfirst:true,
            isdot:false,
            iszero:false,
            ischange:'',
            numbers:[
                {
                    value: '7',
                },
                {
                    value: '8',
                },
                {
                    value: '9',
                },
                {
                    value: '4',
                },
                {
                    value: '5',
                },
                {
                    value: '6',
                },
                {
                    value: '1',
                },
                {
                    value: '2',
                },
                {
                    value: '3',
                },
                {
                    value: '0',
                    classname: 'zero'
                },
                {
                    value: '.',
                }
            ]
        }
    },
    methods:{
        NumberValue: function (data,isfirst,isdot,iszero) {
            this.isfirst=false;
            if(data==='.')
            {
                isdot=true;
            }
            else if(data==='0')
            {
                iszero=true;
            }
            bus.$emit('number', data,isfirst,isdot,iszero);
      },
      mousedown(index){
          this.ischange=index;
      },
      mouseup(){
          this.ischange='';
          bus.$emit('changecolor', this.ischange)
      }
    }
}
</script>


<style lang="scss">
    #number{
        height: 82%;
        width: 100%;
        ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 100%;
            li{
                color: #fff;
                background-color: #363636;
                margin:4% 0 0 3%;
                border-radius: 50%;
                width: 30%;
                height: 22%; 
                line-height: 300%;
                text-align: center;
                font-size: 2rem;
            }
            .zero{
                width: 63%;
                border-radius: 3rem;
            }
            .change{
                background-color: #dcdcdc;
            }
        }
    }
</style>
