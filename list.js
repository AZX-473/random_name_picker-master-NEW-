const name=["孙雨欣","韩馨雨","杜艺嘉乐","李致远","董结","王嘉轩","常艺凡","杲奕然","王雨涵","王若涵","徐瀚霖","王静","姚佳成","兰文博","乔士轩","郭子茹","郝梦薇","孙斌凯","张新烨","徐竟源","王子墨","刘雪菲","赵梓赫","王烁奇","靳晨瑞","张嘉佑","王雨晴","陈发昊","刘爱雯","宋甲一","王子童","刘海萱","李思瑶","何仔语","王运泽","吴雨薇","谢佳録","耿浩天","陈姚妡","姜宇泽","王怡惠","武则润","宋梓琪","张思语","王伟晔","沈永恒","郎丽荣","闫伟泰","孙贞羲","刘雨晴","吴欣烨","李苛欣","张清硕","郭佳洲","赵紫茹","王逸轩","姚雨婷"];
const star=[3,3,3,3,5,5,3,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,3,3,5,3,5,5,3,3,5,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,5,3,3,3];
const maxHistory = 5;
const version = 4;
//配置文件编辑器：
// https://kdxhub.github.io/random_name_picker/comfig-spawn.html
// 根目录下config-spawn.html
function DisableStart(Reazon){document.getElementById('main-loadedList').innerHTML=Reazon;document.getElementById('start').disabled=true;document.getElementById('startButtonTips').innerHTML="引擎故障…";document.getElementById('startGuidancePrompt').innerHTML="请联系管理员/电教委以获取支持"};console.log("name长度="+name.length);console.log("star长度="+star.length);document.getElementById('main-loadedList').innerHTML="共计"+name.length+"名幸运儿，抽取概率均等";if(star.length!=name.length){DisableStart("E04.部署错误。数组「name」与「star」长度不等。")};if(star.length<=10){DisableStart("E05.部署错误。待选项太少（"+star.length+"项）<br>至少需要11项。")};configLoaded();