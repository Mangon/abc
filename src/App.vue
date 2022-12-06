<template>
  <div id="app">
    <div class="home-container" v-show="showAll">
      <div class="grids-container">
        <Grid
          :name="grid.type"
          :type="currentGrid"
          v-for="(grid, index) in showedGrid"
          :key="grid.type"
          @grid-click="clickGrid(index)"
        ></Grid>
      </div>
      <div class="btns-group">
        <div
          :class="'btn ' + (currentGrid === grid.name ? 'active' : '')"
          v-for="grid in grids"
          :key="grid.name"
          @click="clickBtn(grid.name)"
        >
          {{ grid.chinese }} {{ grid.name }}
        </div>
      </div>
    </div>
    <div class="item-container" v-if="!showAll">
      <Item
        :item="currentItem"
        :type="currentGrid"
        @item-click="showGrid()"
        @item-next="clickGrid(index)"
      ></Item>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item.vue";
import Grid from "./components/Grid.vue";

export default {
  name: "app",
  components: {
    Item,
    Grid,
  },
  data() {
    return {
      currentItem: {
        type: "",
        img: "",
        name: "",
        chinese: "",
        color: "",
        voice: "",
      },
      currentGrid: "animals",
      showAll: true,
      grids: [
        {
          name: "animals",
          chinese: "动物",
        },
        {
          name: "vehicles",
          chinese: "交通工具",
        },
        {
          name: "instruments",
          chinese: "乐器",
        },
      ],
      animals: [
        {
          type: "bird",
          num: 7,
          names: [
            {
              name: "bird",
              chinese: "小鸟",
              img: "bird",
              voice: "bird_voice",
            },
            {
              name: "parrot",
              chinese: "鹦鹉",
              img: "parrot",
              voice: "parrot_voice",
            },
            {
              name: "eagle",
              chinese: "老鹰",
              img: "eagle",
              voice: "eagle_voice",
            },
            {
              name: "egret",
              chinese: "鹭鸶",
              img: "egret",
              voice: "egret_voice",
            },
            {
              name: "pigeon",
              chinese: "鸽子",
              img: "pigeon",
              voice: "pigeon_voice",
            },
            {
              name: "eagle",
              chinese: "老鹰",
              img: "eagle1",
              voice: "eagle_voice",
            },
            {
              name: "seagull",
              chinese: "海鸥",
              img: "seagull",
              voice: "seagull_voice",
            },
          ],
        },
        {
          type: "cat",
          num: 5,
          names: [
            {
              name: "cat",
              chinese: "猫咪",
              img: "cat",
              voice: "cat_voice",
            },
            {
              name: "cat",
              chinese: "猫咪",
              img: "cat1",
              voice: "cat_voice1",
            },
            {
              name: "cat",
              chinese: "猫咪",
              img: "cat2",
              voice: "cat_voice2",
            },
            {
              name: "cat",
              chinese: "猫咪",
              img: "cat3",
              voice: "cat_voice3",
            },
            {
              name: "cat",
              chinese: "猫咪",
              img: "cat4",
              voice: "cat_voice4",
            },
          ],
        },
        {
          type: "dog",
          num: 5,
          names: [
            {
              name: "dog",
              chinese: "小狗",
              img: "dog",
              voice: "dog_voice",
            },
            {
              name: "dog",
              chinese: "小狗",
              img: "dog1",
              voice: "dog_voice1",
            },
            {
              name: "dogs",
              chinese: "小狗",
              img: "dog2",
              voice: "dog_voice2",
            },
            {
              name: "dog",
              chinese: "小狗",
              img: "dog3",
              voice: "dog_voice3",
            },
            {
              name: "dog",
              chinese: "小狗",
              img: "dog4",
              voice: "dog_voice4",
            },
          ],
        },
        {
          type: "fox",
          num: 6,
          names: [
            {
              name: "fox",
              chinese: "狐狸",
              img: "fox",
              voice: "fox_voice",
            },
            {
              name: "wolf",
              chinese: "狼",
              img: "wolf",
              voice: "wolf_voice",
            },
            {
              name: "fox",
              chinese: "狐狸",
              img: "fox1",
              voice: "fox_voice",
            },
            {
              name: "squirrel",
              chinese: "松鼠",
              img: "squirrel",
              voice: "squirrel_voice",
            },
            {
              name: "fox",
              chinese: "狐狸",
              img: "fox2",
              voice: "fox_voice",
            },
            {
              name: "rabbit",
              chinese: "兔子",
              chineseName: "rabbit_zh",
              img: "rabbit",
            },
            // FIXME: 豹子、狮子、老虎叫声恐怖
            // {
            //   name: "leopard",
            //   chinese: "豹子",
            //   img: "leopard",
            //   voice: "leopard_voice",
            // },
            // {
            //   name: "leopard",
            //   chinese: "豹子",
            //   img: "leopard1",
            //   voice: "leopard_voice",
            // },
            // {
            //   name: "lion",
            //   chinese: "狮子",
            //   img: "lion",
            //   voice: "lion_voice",
            // },
            // {
            //   name: "lion",
            //   chinese: "狮子",
            //   img: "lion1",
            //   voice: "lion_voice1",
            // },
            // {
            //   name: "lion",
            //   chinese: "狮子",
            //   img: "lion2",
            // },
            // {
            //   name: "lioness",
            //   chinese: "母狮",
            //   img: "lion3",
            // },
            // {
            //   name: "lioness",
            //   chinese: "母狮",
            //   img: "lion4",
            // },
            // {
            //   name: "tiger",
            //   chinese: "老虎",
            //   img: "tiger",
            //   voice: "tiger_voice",
            // },
            // {
            //   name: "tiger",
            //   chinese: "老虎",
            //   img: "tiger1",
            //   voice: "tiger_voice1",
            // },
            // {
            //   name: "tiger",
            //   chinese: "老虎",
            //   img: "tiger2",
            //   voice: "tiger_voice",
            // },
          ],
        },
        {
          type: "chicken",
          num: 4,
          names: [
            {
              name: "chicken",
              chinese: "鸡",
              img: "chicken",
              voice: "chicken_voice",
            },
            {
              name: "hen",
              chinese: "母鸡",
              img: "hen",
              voice: "hen_voice",
            },
            {
              name: "rooster",
              chinese: "公鸡",
              img: "rooster",
              voice: "rooster_voice",
            },
            {
              name: "chick",
              chinese: "小鸡",
              img: "chick",
              voice: "chick_voice",
            },
          ],
        },
        {
          type: "cattle",
          num: 4,
          names: [
            {
              name: "cattle",
              chinese: "黄牛",
              img: "cattle",
              voice: "cattle_voice",
            },
            {
              name: "cows",
              chinese: "奶牛群",
              img: "cows",
              voice: "cows_voice",
            },
            {
              name: "bull",
              chinese: "公牛",
              img: "bull",
              voice: "bull_voice",
            },
            {
              name: "cow",
              chinese: "奶牛",
              img: "cow",
              voice: "cows_voice",
            },
          ],
        },
        {
          type: "monkey",
          num: 3,
          names: [
            {
              name: "monkey",
              chinese: "猴子",
              img: "monkey",
              voice: "monkey_voice",
            },
            // FIXME: 叫声太恐怖
            // {
            //   name: "chimpanzee",
            //   chinese: "猩猩",
            //   img: "monkey1",
            //   voice: "chimpanzee_voice",
            // },
            {
              name: "mandrill",
              chinese: "山魈",
              img: "mandrill",
              voice: "monkey_voice1",
            },
            // {
            //   name: "macaque",
            //   chinese: "猕猴",
            //   img: "monkey3",
            //   voice: "monkey_voice3",
            // },
            // FIXME: 图片太丑
            {
              name: "macaque",
              chinese: "猕猴",
              img: "monkey4",
              voice: "monkey_voice2",
            },
          ],
        },
        {
          type: "sheep",
          num: 3,
          names: [
            {
              name: "sheep",
              chinese: "绵羊",
              img: "sheep",
              voice: "sheep_voice",
            },
            {
              name: "lamb",
              chinese: "羊羔",
              img: "lamb",
              voice: "lamb_voice",
            },
            {
              name: "goat",
              chinese: "山羊",
              img: "goat",
              voice: "goat_voice",
            },
          ],
        },
        {
          type: "donkey",
          num: 6,
          names: [
            {
              name: "donkey",
              chinese: "驴子",
              img: "donkey",
              voice: "donkey_voice",
            },
            {
              name: "horse",
              chinese: "马",
              img: "horse",
              voice: "horse_voice",
            },
            {
              name: "donkey",
              chinese: "驴子",
              img: "donkey1",
              voice: "donkey_voice",
            },
            {
              name: "zebra",
              chinese: "斑马",
              img: "zebra",
              voice: "zebra_voice",
            },
            {
              name: "donkey",
              chinese: "驴子",
              img: "donkey2",
              voice: "donkey_voice",
            },
            {
              name: "donkey",
              chinese: "驴子",
              img: "donkey3",
              voice: "donkey_voice",
            },
            {
              name: "donkey",
              chinese: "驴子",
              img: "donkey4",
              voice: "donkey_voice",
            },
          ],
        },
      ],
      vehicles: [
        {
          type: "car",
          num: 6,
          names: [
            {
              name: "car",
              chinese: "汽车",
              img: "car",
              voice: "car_voice",
            },
            {
              name: "truck",
              chinese: "卡车",
              img: "truck",
              voice: "truck_voice",
            },
            {
              name: "car",
              chinese: "汽车",
              img: "car1",
              voice: "car_voice",
            },
            {
              name: "taxi",
              chinese: "出租车",
              img: "taxi",
              voice: "taxi_voice",
            },
            {
              name: "bus",
              chinese: "公交车",
              img: "bus",
              voice: "bus_voice",
            },
            {
              name: "jeep",
              chinese: "吉普车",
              img: "jeep",
              voice: "jeep_voice",
            },
          ],
        },
        {
          type: "bike",
          num: 3,
          names: [
            {
              name: "bike",
              chinese: "自行车",
              img: "bike",
              voice: "bike_voice",
            },
            {
              name: "autocycle",
              chinese: "摩托车",
              img: "autocycle",
              voice: "autocycle_voice",
            },
            {
              name: "autocycle",
              chinese: "摩托车",
              img: "autocycle1",
              voice: "autocycle_voice1",
            },
          ],
        },
        {
          type: "plane",
          num: 3,
          names: [
            {
              name: "plane",
              chinese: "飞机",
              img: "plane",
              voice: "plane_voice",
            },
            {
              name: "helicopter",
              chinese: "直升机",
              img: "helicopter",
              voice: "helicopter_voice",
            },
            {
              name: "fighter plane",
              chinese: "战斗机",
              img: "fighter plane",
              voice: "fighter plane_voice",
            },
          ],
        },
        {
          type: "ship",
          num: 5,
          names: [
            {
              name: "ship",
              chinese: "船",
              img: "ship",
            },
            {
              name: "yacht",
              chinese: "游艇",
              img: "yacht",
              voice: "yacht_voice",
            },
            {
              name: "boat",
              chinese: "小舟",
              img: "boat",
            },
            {
              name: "sailboat",
              chinese: "帆船",
              img: "sailboat",
            },
            {
              name: "canoe",
              chinese: "独木舟",
              img: "canoe",
            },
          ],
        },
        {
          type: "train",
          num: 3,
          names: [
            {
              name: "train",
              chinese: "火车",
              img: "train",
              voice: "train_voice",
            },
            {
              name: "subway",
              chinese: "地铁",
              img: "subway",
              voice: "subway_voice",
            },
            {
              name: "high-speed railway",
              chinese: "高铁",
              img: "high-speed railway",
              voice: "high-speed railway_voice",
            },
          ],
        },
        {
          type: "fire truck",
          num: 3,
          names: [
            {
              name: "fire truck",
              chinese: "消防车",
              img: "fire truck",
              voice: "fire truck_voice",
            },
            {
              name: "ambulance",
              chinese: "救护车",
              img: "ambulance",
              voice: "ambulance_voice",
            },
            {
              name: "police car",
              chinese: "警车",
              img: "police car",
              voice: "police car_voice",
            },
          ],
        },
        {
          type: "tractor",
          num: 3,
          names: [
            {
              name: "tractor",
              chinese: "拖拉机",
              img: "tractor",
              voice: "tractor_voice",
            },
            {
              name: "excavator",
              chinese: "挖掘机",
              img: "excavator",
              voice: "excavator_voice",
            },
            {
              name: "harvester",
              chinese: "收割机",
              img: "harvester",
              voice: "harvester_voice",
            },
          ],
        },
        {
          type: "hot-air balloon",
          num: 2,
          names: [
            {
              name: "hot-air balloon",
              chinese: "热气球",
              img: "hot-air balloon",
              color: "#666",
            },
            {
              name: "airship",
              chinese: "飞艇",
              img: "airship",
            },
          ],
        },
        {
          type: "rocket",
          num: 2,
          names: [
            {
              name: "rocket",
              chinese: "火箭",
              img: "rocket",
              voice: "rocket_voice",
            },
            {
              name: "space shuttle",
              chinese: "航天飞机",
              img: "space shuttle",
              voice: "space shuttle_voice",
            },
          ],
        },
      ],
      instruments: [
        {
          type: "piano",
          num: 3,
          names: [
            {
              name: "piano",
              chinese: "钢琴",
              img: "piano",
              voice: "piano_voice",
            },
            {
              name: "piano",
              chinese: "钢琴",
              img: "piano1",
              voice: "piano_voice1",
            },
            {
              name: "electronic organ",
              chinese: "电子琴",
              img: "electronic organ",
              voice: "electronic organ_voice",
            },
          ],
        },
        {
          type: "violin",
          num: 2,
          names: [
            {
              name: "violin",
              chinese: "小提琴",
              img: "violin",
              voice: "violin_voice",
            },
            {
              name: "violin",
              chinese: "小提琴",
              img: "violin1",
              voice: "violin_voice1",
            },
            {
              name: "cello",
              chinese: "大提琴",
              img: "cello",
              voice: "cello_voice",
            },
            {
              name: "cello",
              chinese: "大提琴",
              img: "cello1",
              voice: "cello_voice1",
            },
            {
              name: "cello",
              chinese: "大提琴",
              img: "cello2",
            },
          ],
        },
        {
          type: "guitar",
          num: 4,
          names: [
            {
              name: "guitar",
              chinese: "吉他",
              img: "guitar",
              voice: "guitar_voice",
            },
            {
              name: "guitar",
              chinese: "吉他",
              img: "guitar1",
              voice: "guitar_voice1",
            },
            {
              name: "mandolin",
              chinese: "曼陀林",
              img: "mandolin",
              voice: "mandolin_voice",
            },
            {
              name: "mandolin",
              chinese: "曼陀林",
              img: "mandolin1",
              voice: "mandolin_voice1",
            },
          ],
        },
        {
          type: "drum",
          num: 3,
          names: [
            {
              name: "drum",
              chinese: "鼓",
              img: "drum",
              voice: "drum_voice",
            },
            {
              name: "drum set",
              chinese: "架子鼓",
              img: "drum set",
              voice: "drum set_voice",
            },
            {
              name: "drums",
              chinese: "鼓",
              img: "drums",
              voice: "drums_voice",
            },
          ],
        },
        {
          type: "flute",
          num: 1,
          names: [
            {
              name: "flute",
              chinese: "长笛",
              img: "flute",
              voice: "flute_voice",
            },
          ],
        },
        {
          type: "accordion",
          num: 1,
          names: [
            {
              name: "accordion",
              chinese: "手风琴",
              img: "accordion",
              voice: "accordion_voice",
            },
          ],
        },
        {
          type: "brass",
          num: 2,
          names: [
            {
              name: "brass",
              chinese: "铜管",
              img: "brass",
              voice: "brass_voice",
            },
            {
              name: "saxophone",
              chinese: "萨克斯",
              img: "saxophone",
              voice: "saxophone_voice",
            },
          ],
        },
        {
          type: "trumpet",
          num: 2,
          names: [
            {
              name: "trumpet",
              chinese: "小号",
              img: "trumpet",
              voice: "trumpet_voice",
            },
            {
              name: "trumpet",
              chinese: "小号",
              img: "trumpet1",
              voice: "trumpet_voice1",
            },
          ],
        },
        {
          type: "harp",
          num: 2,
          names: [
            {
              name: "harp",
              chinese: "竖琴",
              img: "harp",
              voice: "harp_voice",
            },
            {
              name: "harp",
              chinese: "竖琴",
              img: "harp1",
              voice: "harp_voice1",
            },
          ],
        },
      ],
    };
  },
  computed: {
    showedGrid() {
      return this[this.currentGrid];
    },
  },
  methods: {
    clickGrid(index) {
      let selectedItem = this.showedGrid[index];
      let currentNum =
        selectedItem.num === selectedItem.names.length
          ? 1
          : selectedItem.num + 1;
      this.$set(
        this[this.currentGrid],
        index,
        Object.assign({}, this[this.currentGrid][index], { num: currentNum })
      );
      this.currentItem = {
        type: selectedItem.type,
        ...selectedItem.names[currentNum - 1],
      };
      // eslint-disable-next-line
      // console.log(this.currentItem)
      this.showAll = false;
    },
    clickBtn(grid) {
      this.currentGrid = grid;
    },
    showGrid() {
      this.showAll = true;
    },
  },
};
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.grids-container {
  display: flex;
  flex-wrap: wrap;
}
.btns-group {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #666;
  .btn {
    flex: 1 0 auto;
    line-height: 40px;
    color: #fff;
    background-color: #000;
    transition: background-color 0.4s ease;
    &.active {
      background-color: #464646;
    }
    &:not(:first-of-type) {
      border-left: 1px solid #666;
    }
  }
}
.item-container {
  z-index: 1;
}
</style>
