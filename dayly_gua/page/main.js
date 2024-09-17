
    


            import { getText } from '@zos/i18n'
            import { Accelerometer, FREQ_MODE_NORMAL } from '@zos/sensor'
            import { push } from '@zos/router'
            
            import { createWidget, widget, align, prop, text_style, event } from '@zos/ui'

Page({
  build() {
    createWidget(widget.TEXT, {
      x: 120,
      y: 50,
      w: 400,
      h: 400,
      color: 0xffffff,
      text_size: 48,
      align_h: align.CENTER_V,
     
      text_style: text_style.NONE,
      text: ` 现在凶吉`
    });
    const img = createWidget(widget.IMG, {
      x: 60,
      y: 125,
      w: 364,
      h: 174,
     src: 'bg1.png'
    })
    createWidget(widget.IMG, {
      x: 60,
      y: 320,
      w: 364,
      h: 174,
     src: 'bg2.png'
    })

    createWidget(widget.IMG, {
      x: 60,
      y: 515,
      w: 364,
      h: 174,
     src: 'bg3.png'
    })
    createWidget(widget.IMG, {
      x: 250,
      y: 515,
      w: 364,
      h: 174,
     src: 'bg3.png'
    })
    createWidget(widget.IMG, {
      x: 60,
      y: 710,
      w: 364,
      
     src: 'bg4.png'
    })
const currentDate = new Date();
const month = currentDate.getMonth() + 1; // 月份从0开始，所以需要加1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const formatNumber = (num) => {
  if (num < 10) {
    return chineseNumbers[num];
  } else if (num < 20) {
    return `十${num % 10 === 0 ? '' : chineseNumbers[num % 10]}`;
  } else {
    return `${chineseNumbers[Math.floor(num / 10)]}十${num % 10 === 0 ? '' : chineseNumbers[num % 10]}`;
  }
};

const dateString = `${formatNumber(month)}月${formatNumber(day)}日`;
const timeString = `${formatNumber(hours)}时${formatNumber(minutes)}分`;

createWidget(widget.TEXT, {
  x: 80,
  y: 350,
  w: 400,
  h: 400,
  color: 0xffffff,
  text_size: 34,
  align_h: align.CENTER_V,
 
  text_style: text_style.NONE,
  text: ` ${timeString}`
});

createWidget(widget.TEXT, {
  x: 90,
  y: 200,
  w: 400,
  h: 400,
  color: 0xffffff,
  text_size: 28,
  //align_h: align.LEFT,
  //align_v: align.LEFT,
 
  text_style: text_style.NONE,
  //font: 'fonts/a.ttf',
  text: ` ${dateString}`
});




// 获取当前时间


// 定义六神释义
const guaXiang = [
  { name: '大安', type: '吉', meaning: '主婚姻喜事、工作、学业、官职。',kojue:'大安事事昌，求谋在东方，失物去不远，宅舍保安康。行人身未动，病者主无妨。将军回田野，仔细好推详。' },
  { name: '留连', type: '凶', meaning: '主钱财田宅之事，女人阴私之事，主淫欲。',kojue:'留连事难成，求谋日未明。官事只宜缓，去者来回程，失物南方去，急寻方心明。更需防口舌，人事且平平。' },
  { name: '速喜', type: '吉', meaning: '主信息或我助他人得以回报，或有喜事。',kojue:'喜喜来临，求财向南行。失物申未午，逢人要打听。官事有福德，病者无须恐。田宅六畜吉，行人音信明。' },
  { name: '赤口', type: '凶', meaning: '主斗打官司，凶险之事，不顺。' ,kojue:'赤口主口舌，官非切要防。失物急去寻，行人有惊慌。鸡犬多作怪，病者出西方。更须防咀咒，恐怕染瘟殃。'},
  { name: '小吉', type: '吉', meaning: '主出行，外出，主风流，感情之事。',kojue:'小吉最吉昌，路上好商量。阴人来报喜，失物在坤方。行人立便至，交易甚是强，凡事皆和合，病者祈上苍。' },
  { name: '空亡', type: '凶', meaning: '主虚空，主外财，主牢狱。' ,kojue:'空亡事不祥，阴人多乖张。求财无利益，行人有灾殃。失物寻不见，官事有刑伤。病人逢暗鬼，析解可安康。'}
];

const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const total = hour + minute;
const guaIndex = total % 6;
const currentGuaXiang = guaXiang[guaIndex];

// 设置颜色
const color = currentGuaXiang.type === '吉' ? 0xFFD700 : 0xFF0000; // 金色: 0xFFD700, 红色: 0xFF0000

createWidget(widget.TEXT, {
x: 280,
y: 140,
w: 400,
h: 400,
color: color,
text_size: 100,

text: `${currentGuaXiang.type}  `
});

createWidget(widget.TEXT, {
x: 100,
y: 150,
w: 400,
h: 100,
color: color,
text_size: 34,

text: `此刻: ${currentGuaXiang.name} `
});
createWidget(widget.TEXT, {
  x: 100,
  y: 240,
  w: 400,
  h: 100,
  color: color,
  text_size: 34,
  
  text: ` ${currentGuaXiang.name} `
  });


  createWidget(widget.TEXT, {
    x: 358,
    y: 328,
    w: 40,
    h: 400,
    color: 0xffffff,
    text_size: 32,
    //align_h: align.LEFT,
    //align_v: align.LEFT,
    line_space: -20,
    text_style: text_style.WRAP,
    //font: 'fonts/a.ttf',
    text: `现在时间`
  });
//****************************************************** */
function getDayOfWeek(date) {
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return days[date.getDay()];
}
const dayOfWeek = getDayOfWeek(currentDate); // 获取当前日期的星期几
const textWidget = createWidget(widget.TEXT, {
  x: 90,
  y: 420,
  w: 200,
  h: 50,
  color: 0xffffff,
  text_size: 34,
  align_h: 'center',
  align_v: 'center',
  text: dayOfWeek // 设置文本为星期几
});


function getChineseHour(date) {
  const hours = [
    '子时', '丑时', '寅时', '卯时', '辰时', '巳时', '午时', '未时', '申时', '酉时', '戌时', '亥时'
  ];
  const hourIndex = Math.floor((date.getHours() + 1) / 2) % 12;
  return hours[hourIndex];
}

createWidget(widget.TEXT, {
  x: 85,
  y: 520,
  w: 200,
  h: 200,
  color: 0xffffff,
  text_size: 32,
  
  text: "现在时辰" // 设置文本为当前时辰
});


const chineseHour = getChineseHour(currentDate); // 获取当前时辰
createWidget(widget.TEXT, {
  x: 100,
  y: 590,
  w: 200,
  h: 200,
  color: 0xffffff,
  text_size: 50,
  
  text: chineseHour // 设置文本为当前时辰
}).addEventListener(hmUI.event.CLICK_DOWN, (info) => {
  push({
    url: 'page/videopush',

  })
}),


createWidget(widget.TEXT, {
  x: 275,
  y: 520,
  w: 200,
  h: 200,
  color: 0xffffff,
  text_size: 32,
  
  text: "现在时辰" // 设置文本为当前时辰
});


createWidget(widget.TEXT, {
  x: 255,
  y: 565,
  w: 165,
  h: 130,
  color: 0xffffff,
  text_size: 23.6,
  text_style: text_style.WRAP,
  text: `${currentGuaXiang.meaning}  ` // 设置文本为当前时辰
});

/* const strokeRect = createWidget(widget.STROKE_RECT, {
  x: 255,
  y: 565,
  w: 170,
  h: 130,
  radius: 20,
  line_width: 4,
  color: 0xfc6950
})
 */
createWidget(widget.TEXT, {
  x: 80,
  y: 715,
  w: 330,
  h: 300,
  color: 0xffffff,
  text_size: 34,
  text_style: text_style.WRAP,
  text: `${currentGuaXiang.kojue}  ` // 设置文本为当前时辰
});
/* createWidget(widget.STROKE_RECT, {
  x: 65,
  y: 715,
  w: 355,
  h: 300,
  radius: 20,
  line_width: 4,
  color: 0xfc6950
}) */



  createWidget(widget.BUTTON, {
    x: 200,
    y: 1020,
    w: 80,
    h: 80,
    radius: 200,
    normal_color: 0xfc6950,
    press_color: 0xfeb4a8,
    text: '!',
    text_size: 50,
    click_func: (button_widget) => {
      push({
        url: 'page/about',
      })
    }
  })
}
})