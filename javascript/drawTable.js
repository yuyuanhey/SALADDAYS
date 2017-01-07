function myFunction() {
  var fIndex1 = $( "#mySelect  option:selected" ).val();
  var fIndex2 = $( "#mySelect2 option:selected").val();
  var select1 = true, select2 = true;
  if(fIndex1 == ""){
    select1 = false;
  }
  if(fIndex2 == ""){
    select2 = false;
  }
  // var input, filter, table, tr, td, i;
  var input1 = document.getElementById("myInput");
  var input2 = document.getElementById("myInput2");
  var filter1 = input1.value.toUpperCase();
  var filter2 = input2.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  if(select1 && select2){
    for (i = 0; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[fIndex1-1];
      td2 = tr[i].getElementsByTagName("td")[fIndex2-1];
      if (td1 && td2) {
        // var check = (td1.innerHTML)
        if (td1.innerHTML == parseInt(filter1) && td2.innerHTML.toUpperCase().indexOf(filter2) > -1) {
          tr[i].style.display = "";
        }else if(filter1 == "" && td2.innerHTML.toUpperCase().indexOf(filter2) > -1){
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  else if(select1 && !select2){
      for (i = 0; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[fIndex1-1];
      // td2 = tr[i].getElementsByTagName("td")[fIndex2-1];
      if (td1) {
        if (td1.innerHTML == parseInt(filter1)) {
          tr[i].style.display = "";
        }else if(filter1 == ""){
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  else if(!select1 && select2){
    for (i = 0; i < tr.length; i++) {
      // td1 = tr[i].getElementsByTagName("td")[fIndex1-1];
      td2 = tr[i].getElementsByTagName("td")[fIndex2-1];
      if (td2) {
        if (td2.innerHTML.toUpperCase().indexOf(filter2) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  var count = 0;
  for(i = 0; i < tr.length; i++){
    if(tr[i].style.display != "none")
      count = count + 1;
  }
  document.getElementById("tableCount").innerHTML = "新聞總數 : " + (count-1);
}

var jdata = [{
    "date": "2015/12/16",
    "year": 2015,
    "month": 12,
    "day": 16,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸將在西沙永興島蓋加油站"
  },
  {
    "date": "2015/12/16",
    "year": 2015,
    "month": 12,
    "day": 16,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "睽違4年美國將首度對臺軍售"
  },
  {
    "date": "2015/12/17",
    "year": 2015,
    "month": 12,
    "day": 17,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "美國國務院正式通知國會對台軍售"
  },
  {
    "date": "2015/12/17",
    "year": 2015,
    "month": 12,
    "day": 17,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣拿下全球「開放資料指標」首位 "
  },
  {
    "date": "2015/12/18",
    "year": 2015,
    "month": 12,
    "day": 18,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣央行宣布降息"
  },
  {
    "date": "2015/12/21",
    "year": 2015,
    "month": 12,
    "day": 21,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣迎接第1,000萬名遊客"
  },
  {
    "date": "2015/12/21",
    "year": 2015,
    "month": 12,
    "day": 21,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "深圳工業區發生山崩，91人下落不明"
  },
  {
    "date": "2015/12/21",
    "year": 2015,
    "month": 12,
    "day": 21,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "美國B-52轟炸機誤闖南沙華陽礁上空"
  },
  {
    "date": "2015/12/22",
    "year": 2015,
    "month": 12,
    "day": 22,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸知名維權律師浦志強被判緩刑3年"
  },
  {
    "date": "2015/12/23",
    "year": 2015,
    "month": 12,
    "day": 23,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸公布2016年經濟藍圖"
  },
  {
    "date": "2015/12/24",
    "year": 2015,
    "month": 12,
    "day": 24,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "3年訪臺57次，星國男成最狂熱「臺灣迷」"
  },
  {
    "date": "2015/12/25",
    "year": 2015,
    "month": 12,
    "day": 25,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "批評中國大陸少數民族政策，法籍記者恐遭驅逐出境"
  },
  {
    "date": "2015/12/28",
    "year": 2015,
    "month": 12,
    "day": 28,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸通過反恐法"
  },
  {
    "date": "2015/12/29",
    "year": 2015,
    "month": 12,
    "day": 29,
    "area": "亞洲",
    "place": "澳大利亞",
    "title": "身陷醜聞，澳洲兩位部長同日辭職"
  },
  {
    "date": "2015/12/29",
    "year": 2015,
    "month": 12,
    "day": 29,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "耗時15年，「故宮」南院終開幕"
  },
  {
    "date": "2015/12/29",
    "year": 2015,
    "month": 12,
    "day": 29,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣外交部要求日本速與臺灣協商慰安婦議題"
  },
  {
    "date": "2015/12/30",
    "year": 2015,
    "month": 12,
    "day": 30,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓統一戰線部部長金養建車禍身亡"
  },
  {
    "date": "2015/12/30",
    "year": 2015,
    "month": 12,
    "day": 30,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓獨佔世界前五大造船廠的時代宣告落幕"
  },
  {
    "date": "2015/12/30",
    "year": 2015,
    "month": 12,
    "day": 30,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克總理視察拉馬迪戰果"
  },
  {
    "date": "2015/12/30",
    "year": 2015,
    "month": 12,
    "day": 30,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣要求日本對臺籍慰安婦道歉、賠償"
  },
  {
    "date": "2015/12/31",
    "year": 2015,
    "month": 12,
    "day": 31,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "土耳其駐兵伊拉克北部，加深兩國對立"
  },
  {
    "date": "2015/12/31",
    "year": 2015,
    "month": 12,
    "day": 31,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其破獲新年夜恐攻陰謀"
  },
  {
    "date": "2015/12/31",
    "year": 2015,
    "month": 12,
    "day": 31,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "「馬習會」後，兩岸啟用熱線"
  },
  {
    "date": "2015/12/31",
    "year": 2015,
    "month": 12,
    "day": 31,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺日明年1月將就慰安婦議題展開協商"
  },
  {
    "date": "2016/1/4",
    "year": 2016,
    "month": 1,
    "day": 4,
    "area": "亞洲",
    "place": "沙烏地阿拉伯",
    "title": "沙烏地阿拉伯宣布與伊朗斷交"
  },
  {
    "date": "2016/1/4",
    "year": 2016,
    "month": 1,
    "day": 4,
    "area": "亞洲",
    "place": "印度",
    "title": "印度發生6/8強震"
  },
  {
    "date": "2016/1/4",
    "year": 2016,
    "month": 1,
    "day": 4,
    "area": "兩岸三地",
    "place": "香港",
    "title": "銅鑼灣書店5人失蹤，國際駭客擬攻擊中國大陸網站"
  },
  {
    "date": "2016/1/4",
    "year": 2016,
    "month": 1,
    "day": 4,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸在永暑礁新建機場進行試飛引發越南抗議"
  },
  {
    "date": "2016/1/4",
    "year": 2016,
    "month": 1,
    "day": 4,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸製造業持續萎縮"
  },
  {
    "date": "2016/1/5",
    "year": 2016,
    "month": 1,
    "day": 5,
    "area": "亞洲",
    "place": "南韓",
    "title": "日韓就慰安婦雕像搬遷問題意見分歧"
  },
  {
    "date": "2016/1/5",
    "year": 2016,
    "month": 1,
    "day": 5,
    "area": "亞洲",
    "place": "緬甸",
    "title": "翁山蘇姬：新政府的首要任務是建立和平"
  },
  {
    "date": "2016/1/5",
    "year": 2016,
    "month": 1,
    "day": 5,
    "area": "亞洲",
    "place": "沙烏地阿拉伯",
    "title": "沙烏地阿拉伯盟邦與伊朗斷交"
  },
  {
    "date": "2016/1/6",
    "year": 2016,
    "month": 1,
    "day": 6,
    "area": "亞洲",
    "place": "科威特",
    "title": "科威特加入與伊朗斷交行列"
  },
  {
    "date": "2016/1/6",
    "year": 2016,
    "month": 1,
    "day": 6,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "美軍與「塔利班」交戰，造成一死兩傷"
  },
  {
    "date": "2016/1/6",
    "year": 2016,
    "month": 1,
    "day": 6,
    "area": "亞洲",
    "place": "日本",
    "title": "日相安倍籲同俄國簽署和平條約"
  },
  {
    "date": "2016/1/6",
    "year": 2016,
    "month": 1,
    "day": 6,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "英國外相對香港銅鑼灣書店案表示關切"
  },
  {
    "date": "2016/1/6",
    "year": 2016,
    "month": 1,
    "day": 6,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸在永暑礁試行飛機起降"
  },
  {
    "date": "2016/1/11",
    "year": 2016,
    "month": 1,
    "day": 11,
    "area": "歐洲",
    "place": "西班牙",
    "title": "加泰隆尼亞選出新主席，將繼續推動獨立"
  },
  {
    "date": "2016/1/11",
    "year": 2016,
    "month": 1,
    "day": 11,
    "area": "歐洲",
    "place": "波蘭",
    "title": "波蘭政府召見德國大使，對德方批評言論表達關切"
  },
  {
    "date": "2016/1/11",
    "year": 2016,
    "month": 1,
    "day": 11,
    "area": "亞洲",
    "place": "北韓",
    "title": "金正恩稱北韓核試為自衛性措施"
  },
  {
    "date": "2016/1/11",
    "year": 2016,
    "month": 1,
    "day": 11,
    "area": "亞洲",
    "place": "南韓",
    "title": "北韓核試影響，南韓總統民調止跌回升"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "歐洲",
    "place": "德國",
    "title": "科隆性侵事件影響，梅克爾聲勢下滑"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "阿富汗和平協商，四國代表齊聚巴國"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "「伊斯蘭國」在伊拉克首都發動攻擊，造成多人罹難"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "對應中國大陸填海造島行動，美、菲擬研商策略"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸召開全國和平會議"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞城鎮400人瀕死，需緊急接受治療"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "亞洲",
    "place": "南韓",
    "title": "美國擬在南韓部署更多「戰略資產」，但不會重新部署核武"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "亞洲",
    "place": "越南",
    "title": "抗議北京舉措，越南將增採南海石油"
  },
  {
    "date": "2016/1/12",
    "year": 2016,
    "month": 1,
    "day": 12,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸前公安部副部長李東生收賄案一審宣判"
  },
  {
    "date": "2016/1/13",
    "year": 2016,
    "month": 1,
    "day": 13,
    "area": "歐洲",
    "place": "德國",
    "title": "梅克爾：封鎖邊境恐衝擊「歐盟單一市場」"
  },
  {
    "date": "2016/1/13",
    "year": 2016,
    "month": 1,
    "day": 13,
    "area": "亞洲",
    "place": "韓國",
    "title": "北韓無人機越軍事分界線，南韓開槍示警"
  },
  {
    "date": "2016/1/13",
    "year": 2016,
    "month": 1,
    "day": 13,
    "area": "亞洲",
    "place": "伊朗",
    "title": "美軍誤闖伊朗海域遭扣留，伊朗允諾放人"
  },
  {
    "date": "2016/1/13",
    "year": 2016,
    "month": 1,
    "day": 13,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦西南部城市發生爆炸，至少14人死亡"
  },
  {
    "date": "2016/1/13",
    "year": 2016,
    "month": 1,
    "day": 13,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲最高法院裁定美菲國防合作協議合憲"
  },
  {
    "date": "2016/1/13",
    "year": 2016,
    "month": 1,
    "day": 13,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其伊斯坦堡遭自殺攻擊，造成10人死亡"
  },
  {
    "date": "2016/1/13",
    "year": 2016,
    "month": 1,
    "day": 13,
    "area": "亞洲",
    "place": "日本",
    "title": "阻「中」艦橫行釣島，日擬派軍艦驅離"
  },
  {
    "date": "2016/1/13",
    "year": 2016,
    "month": 1,
    "day": 13,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "多名維權律師涉顛覆罪，遭北京當局逮捕"
  },
  {
    "date": "2016/1/14",
    "year": 2016,
    "month": 1,
    "day": 14,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "普亭宣稱俄國研發出最有效伊波拉疫苗"
  },
  {
    "date": "2016/1/14",
    "year": 2016,
    "month": 1,
    "day": 14,
    "area": "歐洲",
    "place": "烏克蘭",
    "title": "基輔與親俄叛軍再次達成停火協議"
  },
  {
    "date": "2016/1/14",
    "year": 2016,
    "month": 1,
    "day": 14,
    "area": "亞洲",
    "place": "澳洲",
    "title": "世界銀行：TPP對澳洲經濟貢獻不大"
  },
  {
    "date": "2016/1/14",
    "year": 2016,
    "month": 1,
    "day": 14,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓擬向美國提供8軍事基地"
  },
  {
    "date": "2016/1/14",
    "year": 2016,
    "month": 1,
    "day": 14,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其警察總部遭汽車炸彈攻擊"
  },
  {
    "date": "2016/1/14",
    "year": 2016,
    "month": 1,
    "day": 14,
    "area": "亞洲",
    "place": "印尼",
    "title": "雅加達市中心發生連環爆炸，至少6死"
  },
  {
    "date": "2016/1/14",
    "year": 2016,
    "month": 1,
    "day": 14,
    "area": "亞洲",
    "place": "伊朗",
    "title": "美軍誤闖伊朗海域遭扣案圓滿落幕"
  },
  {
    "date": "2016/1/15",
    "year": 2016,
    "month": 1,
    "day": 15,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯擬向阿富汗提供軍武"
  },
  {
    "date": "2016/1/15",
    "year": 2016,
    "month": 1,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "稱慰安婦為妓女，日本自民黨議員失言致歉"
  },
  {
    "date": "2016/1/15",
    "year": 2016,
    "month": 1,
    "day": 15,
    "area": "亞洲",
    "place": "澳洲",
    "title": "雪梨歌劇院驚傳炸彈威脅，澳洲警方緊急疏散群眾"
  },
  {
    "date": "2016/1/15",
    "year": 2016,
    "month": 1,
    "day": 15,
    "area": "亞洲",
    "place": "印尼",
    "title": "雅加達市中心發生恐攻，「伊斯蘭國」承認犯行"
  },
  {
    "date": "2016/1/15",
    "year": 2016,
    "month": 1,
    "day": 15,
    "area": "亞洲",
    "place": "以色列",
    "title": "以色列暗中拉攏遜尼派國家，共同抗衡伊朗"
  },
  {
    "date": "2016/1/15",
    "year": 2016,
    "month": 1,
    "day": 15,
    "area": "亞洲",
    "place": "伊朗",
    "title": "伊朗移除核子反應爐核心"
  },
  {
    "date": "2016/1/18",
    "year": 2016,
    "month": 1,
    "day": 18,
    "area": "歐洲",
    "place": "英國",
    "title": "英首相助穆斯林女性學英文，解決性別歧視"
  },
  {
    "date": "2016/1/18",
    "year": 2016,
    "month": 1,
    "day": 18,
    "area": "歐洲",
    "place": "英國",
    "title": "國際油價跌破30美元大關"
  },
  {
    "date": "2016/1/18",
    "year": 2016,
    "month": 1,
    "day": 18,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大經濟熄火，政府官員面臨壓力"
  },
  {
    "date": "2016/1/18",
    "year": 2016,
    "month": 1,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美國將制裁伊朗彈道飛彈計畫"
  },
  {
    "date": "2016/1/18",
    "year": 2016,
    "month": 1,
    "day": 18,
    "area": "亞洲",
    "place": "日本",
    "title": "東京下起暴雪，逾百人受傷"
  },
  {
    "date": "2016/1/18",
    "year": 2016,
    "month": 1,
    "day": 18,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "美方證實數名美國公民在伊拉克遭綁架"
  },
  {
    "date": "2016/1/18",
    "year": 2016,
    "month": 1,
    "day": 18,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓提有條件取消核試"
  },
  {
    "date": "2016/1/18",
    "year": 2016,
    "month": 1,
    "day": 18,
    "area": "兩岸三地",
    "place": "挪威",
    "title": "臺灣參加挪威旅展，三太子文化吸睛"
  },
  {
    "date": "2016/1/19",
    "year": 2016,
    "month": 1,
    "day": 19,
    "area": "歐洲",
    "place": "英國",
    "title": "禁止川普入境英國？英國會展開辯論"
  },
  {
    "date": "2016/1/19",
    "year": 2016,
    "month": 1,
    "day": 19,
    "area": "歐洲",
    "place": "德國",
    "title": "科隆集體性騷擾案，德國警方逮捕首名嫌犯"
  },
  {
    "date": "2016/1/19",
    "year": 2016,
    "month": 1,
    "day": 19,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦西北城市爆發炸彈攻擊，造成至少6人喪生"
  },
  {
    "date": "2016/1/19",
    "year": 2016,
    "month": 1,
    "day": 19,
    "area": "亞洲",
    "place": "日本",
    "title": "日相安倍籲G7重納俄羅斯"
  },
  {
    "date": "2016/1/19",
    "year": 2016,
    "month": 1,
    "day": 19,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞300平民遭「伊斯蘭國」殺害"
  },
  {
    "date": "2016/1/19",
    "year": 2016,
    "month": 1,
    "day": 19,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣大選落幕，國安基金暫不退場護盤到4月"
  },
  {
    "date": "2016/1/19",
    "year": 2016,
    "month": 1,
    "day": 19,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "西方法界人士連署呼籲中國大陸釋放維權律師"
  },
  {
    "date": "2016/1/20",
    "year": 2016,
    "month": 1,
    "day": 20,
    "area": "歐洲",
    "place": "法國",
    "title": "法國進入經濟緊急狀態，擬斥資20億歐元救經濟"
  },
  {
    "date": "2016/1/20",
    "year": 2016,
    "month": 1,
    "day": 20,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯「豬流感」疫情漸趨嚴重"
  },
  {
    "date": "2016/1/20",
    "year": 2016,
    "month": 1,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "IMF下修2016年全球經濟成長預測至3/4%"
  },
  {
    "date": "2016/1/20",
    "year": 2016,
    "month": 1,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "新的一年美國經濟難有出色表現"
  },
  {
    "date": "2016/1/20",
    "year": 2016,
    "month": 1,
    "day": 20,
    "area": "亞洲",
    "place": "沙烏地阿拉伯",
    "title": "習近平訪沙烏地，簽署14項協議、備忘錄"
  },
  {
    "date": "2016/1/20",
    "year": 2016,
    "month": 1,
    "day": 20,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦大學發生槍擊案，造成至少20人死亡"
  },
  {
    "date": "2016/1/20",
    "year": 2016,
    "month": 1,
    "day": 20,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞和談恐無法如期展開"
  },
  {
    "date": "2016/1/20",
    "year": 2016,
    "month": 1,
    "day": 20,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸2015年經濟成長率6/9%，創下25年來新低"
  },
  {
    "date": "2016/1/21",
    "year": 2016,
    "month": 1,
    "day": 21,
    "area": "歐洲",
    "place": "美國",
    "title": "英國支持IMF總裁爭取連任"
  },
  {
    "date": "2016/1/21",
    "year": 2016,
    "month": 1,
    "day": 21,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利縮減接收庇護申請者的人數"
  },
  {
    "date": "2016/1/21",
    "year": 2016,
    "month": 1,
    "day": 21,
    "area": "歐洲",
    "place": "比利時",
    "title": "反IS聯軍將在布魯塞爾共商大計"
  },
  {
    "date": "2016/1/21",
    "year": 2016,
    "month": 1,
    "day": 21,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "120個人道組織籲終結敘利亞內戰"
  },
  {
    "date": "2016/1/21",
    "year": 2016,
    "month": 1,
    "day": 21,
    "area": "亞洲",
    "place": "日本",
    "title": "避險需求激勵日圓兌美元升至一年高點"
  },
  {
    "date": "2016/1/21",
    "year": 2016,
    "month": 1,
    "day": 21,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "「伊斯蘭國」摧毀伊拉克1,400年歷史之基督教修道院"
  },
  {
    "date": "2016/1/21",
    "year": 2016,
    "month": 1,
    "day": 21,
    "area": "亞洲",
    "place": "日本",
    "title": "最強美軍戰機F-22飛抵日本"
  },
  {
    "date": "2016/1/22",
    "year": 2016,
    "month": 1,
    "day": 22,
    "area": "歐洲",
    "place": "瑞士",
    "title": "法總理：「歐盟」恐因連串危機分崩離析"
  },
  {
    "date": "2016/1/22",
    "year": 2016,
    "month": 1,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬承諾梅克爾將提供奧援，緩解難民危機"
  },
  {
    "date": "2016/1/22",
    "year": 2016,
    "month": 1,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "美國務院宣布赴美免簽新規定"
  },
  {
    "date": "2016/1/22",
    "year": 2016,
    "month": 1,
    "day": 22,
    "area": "亞洲",
    "place": "日本",
    "title": "日本政府解除對伊朗的制裁措施"
  },
  {
    "date": "2016/1/22",
    "year": 2016,
    "month": 1,
    "day": 22,
    "area": "亞洲",
    "place": "越南",
    "title": "越共召開全代會，將選出下任領導人"
  },
  {
    "date": "2016/1/25",
    "year": 2016,
    "month": 1,
    "day": 25,
    "area": "歐洲",
    "place": "英國",
    "title": "巴黎恐攻歹徒揚言攻擊英國"
  },
  {
    "date": "2016/1/25",
    "year": 2016,
    "month": 1,
    "day": 25,
    "area": "歐洲",
    "place": "匈牙利",
    "title": "匈牙利擬修憲限制自由，民眾上街抗議"
  },
  {
    "date": "2016/1/25",
    "year": 2016,
    "month": 1,
    "day": 25,
    "area": "歐洲",
    "place": "葡萄牙",
    "title": "葡萄牙總統大選，中間偏右派候選人當選"
  },
  {
    "date": "2016/1/25",
    "year": 2016,
    "month": 1,
    "day": 25,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "法國：對俄制裁可望今夏解除"
  },
  {
    "date": "2016/1/25",
    "year": 2016,
    "month": 1,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "紐約前市長彭博擬自掏腰包10億美元參選總統"
  },
  {
    "date": "2016/1/25",
    "year": 2016,
    "month": 1,
    "day": 25,
    "area": "亞洲",
    "place": "印度",
    "title": "法國總統歐蘭德抵印訪問"
  },
  {
    "date": "2016/1/25",
    "year": 2016,
    "month": 1,
    "day": 25,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲多位省長支持澳洲改為共和制"
  },
  {
    "date": "2016/1/25",
    "year": 2016,
    "month": 1,
    "day": 25,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "美國務卿施壓敘反對陣營參加和談"
  },
  {
    "date": "2016/1/26",
    "year": 2016,
    "month": 1,
    "day": 26,
    "area": "非洲",
    "place": "喀麥隆",
    "title": "喀麥隆北部發生自殺攻擊，至少32死"
  },
  {
    "date": "2016/1/26",
    "year": 2016,
    "month": 1,
    "day": 26,
    "area": "歐洲",
    "place": "瑞士",
    "title": "世衛：茲卡病毒恐蔓延全美洲"
  },
  {
    "date": "2016/1/26",
    "year": 2016,
    "month": 1,
    "day": 26,
    "area": "歐洲",
    "place": "義大利",
    "title": "經濟制裁解除，伊朗總統訪問義大利"
  },
  {
    "date": "2016/1/26",
    "year": 2016,
    "month": 1,
    "day": 26,
    "area": "歐洲",
    "place": "瑞典",
    "title": "大陸釋放瑞典維權人士，瑞典關注桂民海安危"
  },
  {
    "date": "2016/1/26",
    "year": 2016,
    "month": 1,
    "day": 26,
    "area": "亞洲",
    "place": "澳洲",
    "title": "提倡性別平等，澳洲退役將領獲選2016澳洲年度人物"
  },
  {
    "date": "2016/1/26",
    "year": 2016,
    "month": 1,
    "day": 26,
    "area": "亞洲",
    "place": "馬來西亞",
    "title": "大馬檢方：首相未受賄，6/81億美元是沙國皇室捐款"
  },
  {
    "date": "2016/1/26",
    "year": 2016,
    "month": 1,
    "day": 26,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "聯合國特使：預計於29日展開敘利亞和談"
  },
  {
    "date": "2016/1/27",
    "year": 2016,
    "month": 1,
    "day": 27,
    "area": "歐洲",
    "place": "丹麥",
    "title": "丹麥國會通過具爭議性的移民法案"
  },
  {
    "date": "2016/1/27",
    "year": 2016,
    "month": 1,
    "day": 27,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加國將簽署TPP，但國會未必批准"
  },
  {
    "date": "2016/1/27",
    "year": 2016,
    "month": 1,
    "day": 27,
    "area": "北美洲",
    "place": "巴西",
    "title": "茲卡病毒肆虐，巴西將動員軍方宣導防疫措施"
  },
  {
    "date": "2016/1/27",
    "year": 2016,
    "month": 1,
    "day": 27,
    "area": "北美洲",
    "place": "美國",
    "title": "角逐「聯合國」秘書長職位，保加利亞兩位女性呼聲最高"
  },
  {
    "date": "2016/1/27",
    "year": 2016,
    "month": 1,
    "day": 27,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "日本天皇夫婦出訪菲律賓"
  },
  {
    "date": "2016/1/27",
    "year": 2016,
    "month": 1,
    "day": 27,
    "area": "亞洲",
    "place": "斯里蘭卡",
    "title": "斯里蘭卡銷毀非法象牙"
  },
  {
    "date": "2016/1/27",
    "year": 2016,
    "month": 1,
    "day": 27,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "馬總統將赴南沙太平島訪視"
  },
  {
    "date": "2016/1/27",
    "year": 2016,
    "month": 1,
    "day": 27,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸國家統計局局長落馬，經濟數據再添疑雲"
  },
  {
    "date": "2016/1/28",
    "year": 2016,
    "month": 1,
    "day": 28,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞自殺攻擊，造成至少13人死亡"
  },
  {
    "date": "2016/1/28",
    "year": 2016,
    "month": 1,
    "day": 28,
    "area": "歐洲",
    "place": "法國",
    "title": "法國司法部長陶比拉請辭"
  },
  {
    "date": "2016/1/28",
    "year": 2016,
    "month": 1,
    "day": 28,
    "area": "歐洲",
    "place": "瑞典",
    "title": "瑞典將遣返不符庇護申請標準之移民"
  },
  {
    "date": "2016/1/28",
    "year": 2016,
    "month": 1,
    "day": 28,
    "area": "亞洲",
    "place": "巴布亞紐幾內亞",
    "title": "巴布亞紐幾內亞是全球女性處境最危險的國家"
  },
  {
    "date": "2016/1/28",
    "year": 2016,
    "month": 1,
    "day": 28,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸總統：民主轉移是人民的勝利"
  },
  {
    "date": "2016/1/28",
    "year": 2016,
    "month": 1,
    "day": 28,
    "area": "亞洲",
    "place": "越南",
    "title": "阮富仲連任越共總書記"
  },
  {
    "date": "2016/1/28",
    "year": 2016,
    "month": 1,
    "day": 28,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "凱瑞訪問北京，敦促中國大陸遏止北韓核武野心"
  },
  {
    "date": "2016/1/29",
    "year": 2016,
    "month": 1,
    "day": 29,
    "area": "非洲",
    "place": "南非",
    "title": "對抗通膨壓力，南非央行再度升息半碼"
  },
  {
    "date": "2016/1/29",
    "year": 2016,
    "month": 1,
    "day": 29,
    "area": "歐洲",
    "place": "芬蘭",
    "title": "芬蘭擬驅離2萬名申請庇護遭拒之難民"
  },
  {
    "date": "2016/1/29",
    "year": 2016,
    "month": 1,
    "day": 29,
    "area": "歐洲",
    "place": "德國",
    "title": "抵擋難民潮，德國庇護政策緊縮"
  },
  {
    "date": "2016/1/29",
    "year": 2016,
    "month": 1,
    "day": 29,
    "area": "歐洲",
    "place": "法國",
    "title": "伊朗總統訪法簽署經濟協議"
  },
  {
    "date": "2016/1/29",
    "year": 2016,
    "month": 1,
    "day": 29,
    "area": "亞洲",
    "place": "日本",
    "title": "身陷收賄疑雲，日本經濟再生大臣請辭"
  },
  {
    "date": "2016/1/29",
    "year": 2016,
    "month": 1,
    "day": 29,
    "area": "亞洲",
    "place": "日本",
    "title": "日銀實施負利率，震撼市場"
  },
  {
    "date": "2016/1/29",
    "year": 2016,
    "month": 1,
    "day": 29,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "加拿大公民遭中國大陸以間諜罪起訴"
  },
  {
    "date": "2016/1/30",
    "year": 2016,
    "month": 1,
    "day": 30,
    "area": "非洲",
    "place": "中非共和國",
    "title": "歐盟駐中非部隊涉嫌性侵該國兒童"
  },
  {
    "date": "2016/1/30",
    "year": 2016,
    "month": 1,
    "day": 30,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "對抗IS，荷蘭宣布加入敘利亞空襲行動"
  },
  {
    "date": "2016/1/30",
    "year": 2016,
    "month": 1,
    "day": 30,
    "area": "歐洲",
    "place": "德國",
    "title": "德國南部難民收留中心遭扔擲手榴彈"
  },
  {
    "date": "2016/1/30",
    "year": 2016,
    "month": 1,
    "day": 30,
    "area": "歐洲",
    "place": "瑞士",
    "title": "瑞士檢方調查大馬主權基金遭盜領40億美元案件"
  },
  {
    "date": "2016/1/30",
    "year": 2016,
    "month": 1,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "美國去年第4季經濟成長僅0.7%"
  },
  {
    "date": "2016/1/30",
    "year": 2016,
    "month": 1,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "美國國務院：希拉蕊22封電郵內含「最高機密」資料"
  },
  {
    "date": "2016/1/30",
    "year": 2016,
    "month": 1,
    "day": 30,
    "area": "亞洲",
    "place": "伊朗",
    "title": "伊朗無人機飛越美國航母"
  },
  {
    "date": "2016/1/30",
    "year": 2016,
    "month": 1,
    "day": 30,
    "area": "兩岸三地",
    "place": "香港",
    "title": "國際記者聯盟：2015年香港新聞自由倒退"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "衣索比亞乾旱加劇，引發饑荒危機"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞遭「博科聖地」攻擊，至少65死"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "歐洲",
    "place": "英國",
    "title": "為難民兒童受教權請命，馬拉拉籲全球募款助學"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "歐洲",
    "place": "希臘",
    "title": "希臘島民獲連署提名「諾貝爾和平獎」"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸國會今開議，翁山蘇姬時代來臨"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "亞洲",
    "place": "越南",
    "title": "美艦駛近西沙中建島，越南：尊重無害通行權"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "亞洲",
    "place": "以色列",
    "title": "以色列拒絕法國就以巴問題所提之最後通牒"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "「伊斯蘭國」在敘利亞首都發動炸彈攻擊"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "民進黨蘇嘉全當選臺灣立法院長"
  },
  {
    "date": "2016/2/1",
    "year": 2016,
    "month": 2,
    "day": 1,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "美驅逐艦駛入西沙中建島，中國大陸強烈抨擊"
  },
  {
    "date": "2016/2/2",
    "year": 2016,
    "month": 2,
    "day": 2,
    "area": "非洲",
    "place": "史瓦濟蘭",
    "title": "非洲乾旱造成史瓦濟蘭農業損失慘重"
  },
  {
    "date": "2016/2/2",
    "year": 2016,
    "month": 2,
    "day": 2,
    "area": "歐洲",
    "place": "挪威",
    "title": "「伊斯蘭國」受害性奴獲諾貝爾和平獎提名"
  },
  {
    "date": "2016/2/2",
    "year": 2016,
    "month": 2,
    "day": 2,
    "area": "歐洲",
    "place": "瑞士",
    "title": "WHO將「茲卡病毒」列為全球緊急公衛事件"
  },
  {
    "date": "2016/2/2",
    "year": 2016,
    "month": 2,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "共和黨總統參選人克魯茲贏得愛阿華州總統提名初選"
  },
  {
    "date": "2016/2/2",
    "year": 2016,
    "month": 2,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "美CDC：「世衛」籲全球共抗「茲卡病毒」"
  },
  {
    "date": "2016/2/2",
    "year": 2016,
    "month": 2,
    "day": 2,
    "area": "亞洲",
    "place": "紐西蘭",
    "title": "移居紐西蘭之澳洲移民淨流入人數創新高"
  },
  {
    "date": "2016/2/2",
    "year": 2016,
    "month": 2,
    "day": 2,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "「塔利班」對阿富汗首都警察局發動攻擊"
  },
  {
    "date": "2016/2/2",
    "year": 2016,
    "month": 2,
    "day": 2,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "首批陸客中轉抵臺"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞客機空中爆炸，緊急迫降成功"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "歐洲",
    "place": "梵蒂岡",
    "title": "教宗對中國大陸釋出善意"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙國王要求第二大黨籌組新政府"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "歐洲",
    "place": "比利時",
    "title": "防英脫歐，「歐盟」提四大改革方向"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "美國愛荷華州初選，柯琳頓險勝"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "加強打擊IS，美擬增2017年軍費"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓宣布新一輪振興景氣措施"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓將於本月發射人造衛星"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣玻璃高跟鞋教堂，一圓少女紅毯夢"
  },
  {
    "date": "2016/2/3",
    "year": 2016,
    "month": 2,
    "day": 3,
    "area": "兩岸三地",
    "place": "香港",
    "title": "2016年經濟自由度指數，香港排名全球首位"
  },
  {
    "date": "2016/2/4",
    "year": 2016,
    "month": 2,
    "day": 4,
    "area": "歐洲",
    "place": "梵蒂岡",
    "title": "教宗讚揚中國大陸之言論招致批評"
  },
  {
    "date": "2016/2/4",
    "year": 2016,
    "month": 2,
    "day": 4,
    "area": "歐洲",
    "place": "比利時",
    "title": "「國際記者聯盟」：25年來至少2,297名記者遇害"
  },
  {
    "date": "2016/2/4",
    "year": 2016,
    "month": 2,
    "day": 4,
    "area": "歐洲",
    "place": "法國",
    "title": "法國擬延長國家緊急狀態"
  },
  {
    "date": "2016/2/4",
    "year": 2016,
    "month": 2,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "前聯邦參議員桑托榮退出共和黨總統初選"
  },
  {
    "date": "2016/2/4",
    "year": 2016,
    "month": 2,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "潘基文籲北韓放棄火箭發射計畫"
  },
  {
    "date": "2016/2/4",
    "year": 2016,
    "month": 2,
    "day": 4,
    "area": "亞洲",
    "place": "紐西蘭",
    "title": "TPP在紐西蘭完成簽署"
  },
  {
    "date": "2016/2/4",
    "year": 2016,
    "month": 2,
    "day": 4,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "「聯合國」暫停敘利亞和談"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯強烈敦促北韓勿發射火箭"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "歐洲",
    "place": "希臘",
    "title": "抗議退休金改革計畫，希臘出現大規模罷工"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙孕婦染茲卡，歐洲首例"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬首訪清真寺，盼促宗教和諧"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "北美洲",
    "place": "加拿大",
    "title": "民調：32%加拿大民眾支持TPP，半數民眾沒有意見"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "美國加碼援助敘利亞近10億美元"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "亞洲",
    "place": "日本",
    "title": "日本調派神盾艦因應北韓飛彈"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸：已向北韓表明立場，不希望看到緊張升高"
  },
  {
    "date": "2016/2/5",
    "year": 2016,
    "month": 2,
    "day": 5,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港銅鑼灣書店案，3名失蹤職員在中國大陸接受調查"
  },
  {
    "date": "2016/2/15",
    "year": 2016,
    "month": 2,
    "day": 15,
    "area": "非洲",
    "place": "中非共和國",
    "title": "中非共和國進行第二輪總統大選"
  },
  {
    "date": "2016/2/15",
    "year": 2016,
    "month": 2,
    "day": 15,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈國2村落遭「博科聖地」攻擊，30人喪生"
  },
  {
    "date": "2016/2/15",
    "year": 2016,
    "month": 2,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "美最高法院大法官去世，繼任人選引發兩黨政治角力"
  },
  {
    "date": "2016/2/15",
    "year": 2016,
    "month": 2,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "澳洲外長出訪日本，將與日外務大臣討論北韓議題"
  },
  {
    "date": "2016/2/15",
    "year": 2016,
    "month": 2,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "日本第4季GDP萎縮1/4%，安倍經濟學再受打擊"
  },
  {
    "date": "2016/2/15",
    "year": 2016,
    "month": 2,
    "day": 15,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "匈牙利著名作家將出席「臺北國際書展」"
  },
  {
    "date": "2016/2/15",
    "year": 2016,
    "month": 2,
    "day": 15,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺南維冠大樓搜救行動結束，114人罹難"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "非洲",
    "place": "烏干達",
    "title": "烏干達總統大選前夕，總統候選人一度被捕"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "非洲",
    "place": "安哥拉",
    "title": "安哥拉爆發「黃熱病」疫情"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐洲鋼鐵工人上街抗議中國大陸傾銷"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "歐洲",
    "place": "白俄羅斯",
    "title": "「歐盟」解除對白俄羅斯之制裁"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "北美洲",
    "place": "美國",
    "title": "美國前總統小布希首度為胞弟站台"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "北美洲",
    "place": "美國",
    "title": "「東協」峰會加州登場，聚焦中國大陸及貿易"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓官員：北韓將開城收入用於核武計畫的說法仍待證實"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "亞洲",
    "place": "日本",
    "title": "埃及總統塞西月底將首度訪日"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞醫院學校遭空襲，近50人喪生"
  },
  {
    "date": "2016/2/16",
    "year": 2016,
    "month": 2,
    "day": 16,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "揭「大飢荒」真相獲獎，中國大陸禁止記者赴美領獎"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "非洲",
    "place": "塞內加爾",
    "title": "選舉承諾跳票，塞內加爾總統將做滿7年任期"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」峰會在即，英國改革協議成棘手難題"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "歐洲",
    "place": "法國",
    "title": "法國國民議會通過延長緊急狀態"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬直言川普不會當選"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "亞洲",
    "place": "南韓",
    "title": "美F-22匿蹤戰機飛抵南韓，威懾北韓"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲外長：希望中國大陸停止南海島礁建設"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "亞洲",
    "place": "卡達",
    "title": "沙烏地阿拉伯和俄羅斯同意凍結石油產量"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "亞洲",
    "place": "南韓",
    "title": "韓美聯合軍演將達歷年最大規模"
  },
  {
    "date": "2016/2/17",
    "year": 2016,
    "month": 2,
    "day": 17,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲警遭共黨游擊隊突襲，6死8傷"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "非洲",
    "place": "烏干達",
    "title": "烏干達大選，現任總統尋求第5任期"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "歐洲",
    "place": "瑞士",
    "title": "抗「茲卡」疫情，WHO擬「以蚊制蚊」"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "「聯合國兒童基金會」：非洲近百萬名兒童嚴重營養不良"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬將赴古巴進行歷史性訪問"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓：北韓準備對南韓發動恐攻"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼外海傳規模6.2地震"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其首都發生汽車爆炸，釀至少28死"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣法院判決228受難日籍家屬勝訴"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣首座慰安婦紀念館「阿嬤家」9月正式營運"
  },
  {
    "date": "2016/2/18",
    "year": 2016,
    "month": 2,
    "day": 18,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸在西沙永興島部署飛彈"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "非洲",
    "place": "烏干達",
    "title": "烏干達大選狀況頻傳，在野候選人再度被捕"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈軍自「博科聖地」救出195名人質"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利堅持對難民收容人數設限，「歐盟」國家反彈"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」峰會登場，英國留歐談判陷入膠著"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」將於3月與土耳其舉行峰會討論難民問題"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "歐洲",
    "place": "瑞士",
    "title": "「無國界醫生組織」呼籲對敘利亞空襲展開獨立調查"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "歐洲",
    "place": "烏克蘭",
    "title": "烏克蘭「豬流感」至今已釀253死"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬簽署制裁北韓新法案"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "亞洲",
    "place": "土耳其",
    "title": "安卡拉遭恐怖攻擊，土耳其總統矢言報復"
  },
  {
    "date": "2016/2/19",
    "year": 2016,
    "month": 2,
    "day": 19,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳、紐就移民問題達成新協議"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "非洲",
    "place": "中非共和國",
    "title": "中非共和國大選結果出爐，新總統將面臨嚴峻挑戰"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "非洲",
    "place": "尼日",
    "title": "尼日舉行總統與國會選舉"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "歐洲",
    "place": "德國",
    "title": "德國難民中心起火，旁觀者幸災樂禍"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "歐洲",
    "place": "英國",
    "title": "倫敦市長表態支持英國「脫歐」"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "希拉蕊贏得內華達初選"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "傑布布希退出共和黨總統初選"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "亞洲",
    "place": "澳洲",
    "title": "美艦隊司令籲澳洲派艦赴南海執行航行自由行動"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞遭連環自殺炸彈攻擊"
  },
  {
    "date": "2016/2/22",
    "year": 2016,
    "month": 2,
    "day": 22,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣行政院長：防災三法列優先法案"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "「人權觀察」：衣索比亞政府鎮壓示威民眾"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "祕魯油管漏油，汙染亞馬遜河流域"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "歐洲",
    "place": "馬其頓",
    "title": "馬其頓關閉邊境，上千難民滯留希臘"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "「歐洲警政署」：至少5,000名「聖戰士」滲透「歐盟」"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "FBI要求「蘋果」破解槍手iPhone，比爾蓋茲表態支持"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "亞洲",
    "place": "斐濟",
    "title": "強烈熱帶氣旋襲斐濟，至少29人死亡"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "亞洲",
    "place": "印尼",
    "title": "取締非法捕撈，印尼炸沉27艘外籍漁船"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞停火協議將於27日生效"
  },
  {
    "date": "2016/2/23",
    "year": 2016,
    "month": 2,
    "day": 23,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "衛星照片顯示中國大陸在南沙人工島部署雷達設施"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "非洲",
    "place": "蒲隆地",
    "title": "潘基文：蒲隆地總統承諾釋放2,000人"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "中南美洲",
    "place": "玻利維亞",
    "title": "修憲公投失利，玻利維亞總統連任無望"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "過半荷蘭民眾希望舉行「脫歐公投」"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "「歐洲刑警組織」：人蛇發難民財，年賺數十億歐元"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "內華達州「共和黨」初選，川普輕鬆取勝"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬向國會提交關閉關塔那摩監獄計畫"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "亞洲",
    "place": "日本",
    "title": "日兩在野黨擬合併迎戰參議院選舉"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞內戰造成逾27萬人喪生"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸派遣戰機至永興島"
  },
  {
    "date": "2016/2/24",
    "year": 2016,
    "month": 2,
    "day": 24,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港電影金像獎頒獎典禮遭大陸禁播"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙兩政黨協議組閣，席次未過半恐功敗垂成"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "歐洲",
    "place": "匈牙利",
    "title": "匈牙利將就「歐盟」難民收留配額舉行公投"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐洲難民危機：比利時加入邊境管制行列"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "氣候變遷加劇，熱浪恐每年侵襲全球6成地表"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "安理會制裁北韓草案，美國與中國大陸達成共識"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "美太平洋司令：持續在南海執行海空航行任務"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "IMF：全球經濟進一步走弱"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲規劃未來10年國防預算增加299億澳幣"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "亞洲",
    "place": "日本",
    "title": "臺灣「富士康」斥資60億美元買下「夏普」"
  },
  {
    "date": "2016/2/25",
    "year": 2016,
    "month": 2,
    "day": 25,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港無線電視台新聞使用簡體字字幕，引發民眾批評"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "非洲",
    "place": "蒲隆地",
    "title": "人權組織：蒲隆地維安部隊攻擊平民"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "中南美洲",
    "place": "巴西",
    "title": "「世衛」秘書長：「茲卡」疫情恐有擴散之虞"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "中南美洲",
    "place": "牙買加",
    "title": "牙買加舉行國會大選"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "歐洲",
    "place": "德國",
    "title": "德國國會決議緊縮難民庇護法規"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "歐洲",
    "place": "希臘",
    "title": "移民危機：希臘召回駐奧地利大使"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "美國向安理會提交制裁北韓之決議草案"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "亞洲",
    "place": "土耳其",
    "title": "被控洩漏國家機密遭逮，兩名土國記者終獲釋"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲指印尼恐攻威脅增，遊客需提高警覺"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "亞洲",
    "place": "日本",
    "title": "日本1月通膨率掉回零，通縮陰影再現"
  },
  {
    "date": "2016/2/26",
    "year": 2016,
    "month": 2,
    "day": 26,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸將參加環太平洋軍演"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞連環爆炸案，激進組織「青年黨」坦承犯案"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "非洲",
    "place": "辛巴威",
    "title": "辛巴威總統豪擲80萬美元辦生日趴，引發外界抨擊"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "涉嫌設立私人行刑隊，哥倫比亞前總統胞弟遭警方逮捕"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "阿根廷和國際債權人達成償債協議"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "歐洲",
    "place": "英國",
    "title": "「蘇格蘭民族黨」黨魁支持英國續留「歐盟」"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "歐洲",
    "place": "馬其頓",
    "title": "馬其頓警方以催淚彈驅離闖關移民"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "歐洲",
    "place": "法國",
    "title": "法國拆除加萊難民營，爆發警民衝突"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "亞洲",
    "place": "伊朗",
    "title": "伊朗國會大選，改革派獲多數席次"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘反對派控政府軍違反停火協議"
  },
  {
    "date": "2016/3/1",
    "year": 2016,
    "month": 3,
    "day": 1,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺南震災追思會，弔念117名罹難者"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "歐洲",
    "place": "比利時",
    "title": "因應難民危機，「歐盟」將提緊急應變計畫"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "歐洲",
    "place": "瑞士",
    "title": "聯合國難民署：今年抵歐難民已逾13萬人"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "歐洲",
    "place": "奧地利",
    "title": "德總理譴責邊境限制，奧國反駁稱「荒謬」"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "產量凍結獲共識，國際油價18月來首揚"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "「聯合國」對北韓制裁案預計延至2日表決"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "「超級星期二」登場，川普和柯琳頓目前各拿下7州"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "亞洲",
    "place": "越南",
    "title": "越南百年大旱重創當地農業"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲去年第4季GDP年增3%，優於預期"
  },
  {
    "date": "2016/3/2",
    "year": 2016,
    "month": 3,
    "day": 2,
    "area": "亞洲",
    "place": "日本",
    "title": "安倍宣布將撥款135億日圓援助難民"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "非洲",
    "place": "埃及",
    "title": "與以色列大使共進晚餐惹議，埃及議員遭國會除名"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "非洲",
    "place": "坦尚尼亞",
    "title": "南蘇丹加入「東非共同體」成為第六個成員國"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西水壩潰堤災難，薩瑪爾戈公司同意支付44億里拉賠償金"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥大毒梟要求引渡美國受審"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」：7億歐元助成員國因應移民危機"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "歐洲",
    "place": "法國",
    "title": "法國種族歧視問題呈現惡化趨勢"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "美太平洋司令提議組「小北約」，抗衡中國大陸"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大自由黨在大選後支持率升高"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "亞洲",
    "place": "北韓",
    "title": "安理會甫通過制裁決議，北韓疑發射短程飛彈"
  },
  {
    "date": "2016/3/3",
    "year": 2016,
    "month": 3,
    "day": 3,
    "area": "亞洲",
    "place": "紐西蘭",
    "title": "紐西蘭就換國旗進行最後公投"
  },
  {
    "date": "2016/3/4",
    "year": 2016,
    "month": 3,
    "day": 4,
    "area": "歐洲",
    "place": "比利時",
    "title": "「申根區」自由通行制可望11月前恢復"
  },
  {
    "date": "2016/3/4",
    "year": 2016,
    "month": 3,
    "day": 4,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "逾7成俄人支持普亭連任總統"
  },
  {
    "date": "2016/3/4",
    "year": 2016,
    "month": 3,
    "day": 4,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大低碳經濟閉門會議，杜魯道：碳定價不可或缺"
  },
  {
    "date": "2016/3/4",
    "year": 2016,
    "month": 3,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "美共和黨總統初選，川普和羅姆尼大打口水戰"
  },
  {
    "date": "2016/3/4",
    "year": 2016,
    "month": 3,
    "day": 4,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓下令軍方做好動用核武之準備"
  },
  {
    "date": "2016/3/7",
    "year": 2016,
    "month": 3,
    "day": 7,
    "area": "非洲",
    "place": "貝南",
    "title": "西非貝南舉行總統大選"
  },
  {
    "date": "2016/3/7",
    "year": 2016,
    "month": 3,
    "day": 7,
    "area": "中南美洲",
    "place": "牙買加",
    "title": "牙買加新總理宣誓上任"
  },
  {
    "date": "2016/3/7",
    "year": 2016,
    "month": 3,
    "day": 7,
    "area": "歐洲",
    "place": "比利時",
    "title": "遏止難民潮，「歐盟」與土耳其召開緊急峰會"
  },
  {
    "date": "2016/3/7",
    "year": 2016,
    "month": 3,
    "day": 7,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利籲「歐盟」明定難民收容上限"
  },
  {
    "date": "2016/3/7",
    "year": 2016,
    "month": 3,
    "day": 7,
    "area": "北美洲",
    "place": "美國",
    "title": "美國前第一夫人南西雷根辭世"
  },
  {
    "date": "2016/3/7",
    "year": 2016,
    "month": 3,
    "day": 7,
    "area": "亞洲",
    "place": "南韓",
    "title": "美韓舉行史上最大規模聯合軍演"
  },
  {
    "date": "2016/3/7",
    "year": 2016,
    "month": 3,
    "day": 7,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "執行安理會制裁決議，菲律賓扣押北韓貨輪"
  },
  {
    "date": "2016/3/7",
    "year": 2016,
    "month": 3,
    "day": 7,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "在臺日本留學生舉辦活動感謝臺灣對311地震之援助"
  },
  {
    "date": "2016/3/8",
    "year": 2016,
    "month": 3,
    "day": 8,
    "area": "非洲",
    "place": "突尼西亞",
    "title": "突尼西亞邊城遭IS聖戰士襲擊"
  },
  {
    "date": "2016/3/8",
    "year": 2016,
    "month": 3,
    "day": 8,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "美軍對索馬利亞激進組織「青年黨」發動空襲"
  },
  {
    "date": "2016/3/8",
    "year": 2016,
    "month": 3,
    "day": 8,
    "area": "歐洲",
    "place": "比利時",
    "title": "土耳其與「歐盟」就難民問題達成有條件協議"
  },
  {
    "date": "2016/3/8",
    "year": 2016,
    "month": 3,
    "day": 8,
    "area": "歐洲",
    "place": "比利時",
    "title": "阻人蛇集團偷渡難民，「北約」將派艦赴愛琴海巡邏"
  },
  {
    "date": "2016/3/8",
    "year": 2016,
    "month": 3,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "前紐約市長彭博：不會參選美國總統"
  },
  {
    "date": "2016/3/8",
    "year": 2016,
    "month": 3,
    "day": 8,
    "area": "亞洲",
    "place": "美國",
    "title": "北韓駭客試圖攻擊南韓鐵路系統"
  },
  {
    "date": "2016/3/9",
    "year": 2016,
    "month": 3,
    "day": 9,
    "area": "中南美洲",
    "place": "薩爾瓦多",
    "title": "犯罪率創新高，薩爾瓦多可能宣布緊急狀態"
  },
  {
    "date": "2016/3/9",
    "year": 2016,
    "month": 3,
    "day": 9,
    "area": "歐洲",
    "place": "瑞士",
    "title": "「世衛」呼籲孕婦避開茲卡病毒疫區"
  },
  {
    "date": "2016/3/9",
    "year": 2016,
    "month": 3,
    "day": 9,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」與土耳其難民協議草案遭質疑"
  },
  {
    "date": "2016/3/9",
    "year": 2016,
    "month": 3,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "美政府可能進一步放寬對古巴的旅遊與貿易限制"
  },
  {
    "date": "2016/3/9",
    "year": 2016,
    "month": 3,
    "day": 9,
    "area": "亞洲",
    "place": "伊朗",
    "title": "伊朗再度試射彈道飛彈"
  },
  {
    "date": "2016/3/9",
    "year": 2016,
    "month": 3,
    "day": 9,
    "area": "亞洲",
    "place": "北韓",
    "title": "金正恩稱北韓已擁有小型化核彈頭"
  },
  {
    "date": "2016/3/10",
    "year": 2016,
    "month": 3,
    "day": 10,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "聯合國糧農組織：非洲27國面臨飢荒"
  },
  {
    "date": "2016/3/10",
    "year": 2016,
    "month": 3,
    "day": 10,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "秘魯選舉委員會禁止兩位候選人參與總統大選"
  },
  {
    "date": "2016/3/10",
    "year": 2016,
    "month": 3,
    "day": 10,
    "area": "歐洲",
    "place": "斯洛維尼亞",
    "title": "阻難民入西歐，斯洛維尼亞推邊管新制"
  },
  {
    "date": "2016/3/10",
    "year": 2016,
    "month": 3,
    "day": 10,
    "area": "北美洲",
    "place": "美國",
    "title": "加拿大人氣總理赴美訪問，歐巴馬國宴款待"
  },
  {
    "date": "2016/3/10",
    "year": 2016,
    "month": 3,
    "day": 10,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸總統候選人，翁山蘇姬親信獲提名"
  },
  {
    "date": "2016/3/10",
    "year": 2016,
    "month": 3,
    "day": 10,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓朝日本海發射2枚短程飛彈"
  },
  {
    "date": "2016/3/10",
    "year": 2016,
    "month": 3,
    "day": 10,
    "area": "亞洲",
    "place": "伊朗",
    "title": "伊朗試射飛彈意在警告以色列"
  },
  {
    "date": "2016/3/11",
    "year": 2016,
    "month": 3,
    "day": 11,
    "area": "歐洲",
    "place": "德國",
    "title": "歐洲央行下猛藥救經濟，宣布降息、加碼QE"
  },
  {
    "date": "2016/3/11",
    "year": 2016,
    "month": 3,
    "day": 11,
    "area": "歐洲",
    "place": "斯洛維尼亞",
    "title": "斯洛維尼亞允諾4月起恢復接收難民"
  },
  {
    "date": "2016/3/11",
    "year": 2016,
    "month": 3,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "加拿大總理訪美，稱美加關係像手足"
  },
  {
    "date": "2016/3/11",
    "year": 2016,
    "month": 3,
    "day": 11,
    "area": "亞洲",
    "place": "日本",
    "title": "日本將派蒼龍級潛艦參與聯合軍演，爭取澳洲採購合約"
  },
  {
    "date": "2016/3/11",
    "year": 2016,
    "month": 3,
    "day": 11,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "美日等12國同聲譴責中國大陸打壓維權人士"
  },
  {
    "date": "2016/3/14",
    "year": 2016,
    "month": 3,
    "day": 14,
    "area": "非洲",
    "place": "象牙海岸",
    "title": "象牙海岸度假城鎮恐攻釀16死，蓋達分支坦承犯案"
  },
  {
    "date": "2016/3/14",
    "year": 2016,
    "month": 3,
    "day": 14,
    "area": "中南美洲",
    "place": "古巴",
    "title": "歐盟與古巴簽署協議，推動關係正常化"
  },
  {
    "date": "2016/3/14",
    "year": 2016,
    "month": 3,
    "day": 14,
    "area": "歐洲",
    "place": "德國",
    "title": "德國3邦地方議會選舉，考驗梅克爾難民政策"
  },
  {
    "date": "2016/3/14",
    "year": 2016,
    "month": 3,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬承諾訪問古巴期間將提人權議題"
  },
  {
    "date": "2016/3/14",
    "year": 2016,
    "month": 3,
    "day": 14,
    "area": "亞洲",
    "place": "南韓",
    "title": "美航母史坦尼斯號加入韓美聯合軍演"
  },
  {
    "date": "2016/3/14",
    "year": 2016,
    "month": 3,
    "day": 14,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其首都市中心汽車炸彈攻擊，至少34死"
  },
  {
    "date": "2016/3/14",
    "year": 2016,
    "month": 3,
    "day": 14,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "人權紀錄遭批評，北京召集親政府學者反擊美國"
  },
  {
    "date": "2016/3/15",
    "year": 2016,
    "month": 3,
    "day": 15,
    "area": "非洲",
    "place": "蒲隆地",
    "title": "歐盟暫停對蒲隆地之直接援助"
  },
  {
    "date": "2016/3/15",
    "year": 2016,
    "month": 3,
    "day": 15,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西前總統魯拉可能出任部長職位"
  },
  {
    "date": "2016/3/15",
    "year": 2016,
    "month": 3,
    "day": 15,
    "area": "歐洲",
    "place": "德國",
    "title": "無畏地方選舉慘敗，梅克爾堅持接納難民政策"
  },
  {
    "date": "2016/3/15",
    "year": 2016,
    "month": 3,
    "day": 15,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "普亭下令俄軍撤離敘利亞"
  },
  {
    "date": "2016/3/15",
    "year": 2016,
    "month": 3,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "美國會支持臺灣入國際刑警組織"
  },
  {
    "date": "2016/3/15",
    "year": 2016,
    "month": 3,
    "day": 15,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸國會舉行表決，翁山蘇姬親信碇喬當選總統"
  },
  {
    "date": "2016/3/15",
    "year": 2016,
    "month": 3,
    "day": 15,
    "area": "亞洲",
    "place": "杜拜",
    "title": "難民營女老師獲全球教師獎"
  },
  {
    "date": "2016/3/16",
    "year": 2016,
    "month": 3,
    "day": 16,
    "area": "非洲",
    "place": "布吉納法索",
    "title": "因應恐攻，法國擬在布吉納法索部署武警部隊"
  },
  {
    "date": "2016/3/16",
    "year": 2016,
    "month": 3,
    "day": 16,
    "area": "非洲",
    "place": "辛巴威",
    "title": "辛巴威糧荒，兒童嚴重營養不良"
  },
  {
    "date": "2016/3/16",
    "year": 2016,
    "month": 3,
    "day": 16,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "中國大陸漁船在阿根廷海域非法作業，遭海警隊擊沉"
  },
  {
    "date": "2016/3/16",
    "year": 2016,
    "month": 3,
    "day": 16,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利將協助馬其頓關閉與希臘之邊界"
  },
  {
    "date": "2016/3/16",
    "year": 2016,
    "month": 3,
    "day": 16,
    "area": "北美洲",
    "place": "美國",
    "title": "美國將禁止大西洋油氣鑽探活動"
  },
  {
    "date": "2016/3/16",
    "year": 2016,
    "month": 3,
    "day": 16,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦白沙瓦發生巴士爆炸案，至少15死"
  },
  {
    "date": "2016/3/16",
    "year": 2016,
    "month": 3,
    "day": 16,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼擊沉惡名昭彰的盜獵漁船 「維京號」"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞參議院否決性別平等法草案，引發大眾譴責"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "非洲",
    "place": "摩洛哥",
    "title": "潘基文發言惹議，摩洛哥退出西薩哈拉維和行動"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "阿根廷眾議院通過與債權人達成之和解協議"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西前總統魯拉將入閣擔任幕僚長"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "歐洲",
    "place": "比利時",
    "title": "推動歐土難民協議草案，歐盟領導人再開峰會"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "歐洲",
    "place": "德國",
    "title": "德法批評以色列吞併約旦河西岸土地之決定"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬擬4月出訪沙烏地阿拉伯及英國"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大爭取擔任2021年「聯合國」安理會非常任理事國"
  },
  {
    "date": "2016/3/17",
    "year": 2016,
    "month": 3,
    "day": 17,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓判處一名美國大學生15年勞改"
  },
  {
    "date": "2016/3/18",
    "year": 2016,
    "month": 3,
    "day": 18,
    "area": "非洲",
    "place": "喀麥隆",
    "title": "「博科聖地」武裝分子遭喀麥隆軍事法院判處死刑"
  },
  {
    "date": "2016/3/18",
    "year": 2016,
    "month": 3,
    "day": 18,
    "area": "中南美洲",
    "place": "智利",
    "title": "智利眾議院通過有條件開放墮胎"
  },
  {
    "date": "2016/3/18",
    "year": 2016,
    "month": 3,
    "day": 18,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西法官下令中止前總統魯拉入閣"
  },
  {
    "date": "2016/3/18",
    "year": 2016,
    "month": 3,
    "day": 18,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」就難民協議草案達成共同立場"
  },
  {
    "date": "2016/3/18",
    "year": 2016,
    "month": 3,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬訪古行將接見異議人士"
  },
  {
    "date": "2016/3/18",
    "year": 2016,
    "month": 3,
    "day": 18,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲參議院通過選制改革法案，為國會提前改選鋪路"
  },
  {
    "date": "2016/3/18",
    "year": 2016,
    "month": 3,
    "day": 18,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓再度試射飛彈，疑為「蘆洞」中程飛彈"
  },
  {
    "date": "2016/3/18",
    "year": 2016,
    "month": 3,
    "day": 18,
    "area": "亞洲",
    "place": "土耳其",
    "title": "掌握恐攻情資，德國暫時關閉駐土耳其使館及學校"
  },
  {
    "date": "2016/3/21",
    "year": 2016,
    "month": 3,
    "day": 21,
    "area": "非洲",
    "place": "塞內加爾",
    "title": "塞內加爾舉行修憲公投，縮短總統任期"
  },
  {
    "date": "2016/3/21",
    "year": 2016,
    "month": 3,
    "day": 21,
    "area": "非洲",
    "place": "尼日",
    "title": "尼日總統大選，現任總統可望連任"
  },
  {
    "date": "2016/3/21",
    "year": 2016,
    "month": 3,
    "day": 21,
    "area": "中南美洲",
    "place": "古巴",
    "title": "歐巴馬抵達古巴展開歷史性訪問"
  },
  {
    "date": "2016/3/21",
    "year": 2016,
    "month": 3,
    "day": 21,
    "area": "歐洲",
    "place": "希臘",
    "title": "歐土難民協議生效，希臘將與土耳其討論難民遣返事宜"
  },
  {
    "date": "2016/3/21",
    "year": 2016,
    "month": 3,
    "day": 21,
    "area": "亞洲",
    "place": "俄羅斯",
    "title": "杜拜客機墜毀俄羅斯，機上62人全數罹難"
  },
  {
    "date": "2016/3/21",
    "year": 2016,
    "month": 3,
    "day": 21,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲總理：勞動法案若未通過將解散國會"
  },
  {
    "date": "2016/3/21",
    "year": 2016,
    "month": 3,
    "day": 21,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其伊斯坦堡鬧區傳自殺攻擊，5死36傷"
  },
  {
    "date": "2016/3/21",
    "year": 2016,
    "month": 3,
    "day": 21,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "印尼抗議中國大陸海警船侵犯納土納海域"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "非洲",
    "place": "貝南",
    "title": "棉花大王塔隆當選貝南總統"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西財長宣布措施以填補預算缺口"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "中南美洲",
    "place": "古巴",
    "title": "歐巴馬與古巴總統展開歷史性會談"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "歐洲",
    "place": "比利時",
    "title": "布魯塞爾機場與地鐵站接連發生爆炸，至少11死30傷"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "歐洲",
    "place": "英國",
    "title": "英國工商業聯合會：脫歐將使英國蒙受龐大經濟損失"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "歐洲",
    "place": "法國",
    "title": "巴黎恐攻案主嫌落網，法總統會見受害者團體"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "北美洲",
    "place": "加拿大",
    "title": "「聯合國」：加拿大安置難民作為值得效法"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "美最大驅逐艦出海進行測試"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "亞洲",
    "place": "澳洲",
    "title": "陸企租下澳洲達爾文港，美國憂軍情恐外洩"
  },
  {
    "date": "2016/3/22",
    "year": 2016,
    "month": 3,
    "day": 22,
    "area": "亞洲",
    "place": "北韓",
    "title": "動作頻頻，北韓再度發射5枚短程飛行物"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "非洲",
    "place": "尼日",
    "title": "尼日總統大選結果出爐，現任總統獲壓倒性勝利"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西總統：彈劾舉動形同政變"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "中南美洲",
    "place": "古巴",
    "title": "美國總統歐巴馬對古巴民眾發表演說"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "歐洲",
    "place": "比利時",
    "title": "布魯塞爾機場遭恐怖攻擊，自殺炸彈客為兄弟檔"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "烏克蘭女飛官遭俄羅斯法院判處22年徒刑"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "布魯塞爾恐攻，歐巴馬致電比國總理"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "北美洲",
    "place": "加拿大",
    "title": "比京遭恐攻，溫哥華機場加派維安警力"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "亞洲",
    "place": "緬甸",
    "title": "翁山蘇姬將出任緬甸外長"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "亞洲",
    "place": "印尼",
    "title": "臺灣漁船在印尼海域遭槍擊"
  },
  {
    "date": "2016/3/23",
    "year": 2016,
    "month": 3,
    "day": 23,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "宣示南海主權，臺灣政府率媒體團登太平島"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "非洲",
    "place": "塞內加爾",
    "title": "塞內加爾修憲公投，逾6成民眾支持縮短總統任期"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞政府與革命軍和談未果"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "歐巴馬允諾公開阿根廷政變時期之機密文件"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "歐洲",
    "place": "奧地利",
    "title": "布魯塞爾恐攻後，奧地利加強安全措施"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬：消滅「伊斯蘭國」係任內首要任務"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大將擴大財政支出以拉抬經濟"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "亞洲",
    "place": "紐西蘭",
    "title": "紐西蘭國旗公投出爐，決定保留原本國旗"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其總統：去年就已將布魯塞爾恐攻案其中一名嫌犯驅逐出境"
  },
  {
    "date": "2016/3/24",
    "year": 2016,
    "month": 3,
    "day": 24,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "馬總統邀請菲方代表與國際仲裁員前往太平島參觀"
  },
  {
    "date": "2016/3/25",
    "year": 2016,
    "month": 3,
    "day": 25,
    "area": "非洲",
    "place": "剛果",
    "title": "剛果總統大選，現任總統獲得連任"
  },
  {
    "date": "2016/3/25",
    "year": 2016,
    "month": 3,
    "day": 25,
    "area": "中南美洲",
    "place": "巴拿馬",
    "title": "世衛組織：巴拿馬出現與茲卡病毒有關之小頭症病例"
  },
  {
    "date": "2016/3/25",
    "year": 2016,
    "month": 3,
    "day": 25,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "歐巴馬向阿根廷獨裁時代受難者致敬"
  },
  {
    "date": "2016/3/25",
    "year": 2016,
    "month": 3,
    "day": 25,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時警方發動地毯式搜索，逮捕6名嫌犯"
  },
  {
    "date": "2016/3/25",
    "year": 2016,
    "month": 3,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "美「中」元首峰會將於本月底登場"
  },
  {
    "date": "2016/3/25",
    "year": 2016,
    "month": 3,
    "day": 25,
    "area": "亞洲",
    "place": "日本",
    "title": "日本「中國通」橫井裕出任駐陸大使"
  },
  {
    "date": "2016/3/25",
    "year": 2016,
    "month": 3,
    "day": 25,
    "area": "亞洲",
    "place": "印度",
    "title": "印尼承認巡邏船對臺灣漁船開火"
  },
  {
    "date": "2016/3/28",
    "year": 2016,
    "month": 3,
    "day": 28,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "衣索比亞面臨數十年來最嚴重乾旱"
  },
  {
    "date": "2016/3/28",
    "year": 2016,
    "month": 3,
    "day": 28,
    "area": "中南美洲",
    "place": "玻利維亞",
    "title": "不滿智利用水不付費，玻利維亞揚言向國際法院提告"
  },
  {
    "date": "2016/3/28",
    "year": 2016,
    "month": 3,
    "day": 28,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利逮捕涉嫌參與巴黎、比京恐攻之嫌犯"
  },
  {
    "date": "2016/3/28",
    "year": 2016,
    "month": 3,
    "day": 28,
    "area": "歐洲",
    "place": "梵蒂岡",
    "title": "教宗呼籲以愛對抗恐怖主義"
  },
  {
    "date": "2016/3/28",
    "year": 2016,
    "month": 3,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "挑戰「協和號」，美公司打造更快更便宜之超音速客機"
  },
  {
    "date": "2016/3/28",
    "year": 2016,
    "month": 3,
    "day": 28,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞政府軍收復古城巴邁拉，有助打擊IS"
  },
  {
    "date": "2016/3/28",
    "year": 2016,
    "month": 3,
    "day": 28,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦公園遭自殺炸彈攻擊，至少67死300傷"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "約2/3非洲國家向中國大陸採購武器"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "非洲",
    "place": "吉布地",
    "title": "吉布地將出現首座中國大陸海外軍事基地"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西聯合政府面臨解體危機"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴前領導人卡斯楚：不需要美國施捨"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "歐洲",
    "place": "英國",
    "title": "慈善組織：富裕國家應收容更多敘利亞難民"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時釋放布魯塞爾恐攻嫌疑犯"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "美日韓領導人將舉行三邊會談，討論北韓核武問題"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "FBI成功解鎖兇嫌手機，與「蘋果」司法爭議落幕"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "亞洲",
    "place": "日本",
    "title": "日本安保法正式上路，解禁集體自衛權"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓民主人士空飄傳單，譴責北韓領導人金正恩"
  },
  {
    "date": "2016/3/29",
    "year": 2016,
    "month": 3,
    "day": 29,
    "area": "亞洲",
    "place": "日本",
    "title": "強化情蒐，日本啟用東海雷達站"
  },
  {
    "date": "2016/3/30",
    "year": 2016,
    "month": 3,
    "day": 30,
    "area": "非洲",
    "place": "葡萄牙",
    "title": "「世衛組織」：「伊波拉」緊急狀態解除"
  },
  {
    "date": "2016/3/30",
    "year": 2016,
    "month": 3,
    "day": 30,
    "area": "非洲",
    "place": "埃及",
    "title": "「埃及航空」劫機案和平落幕，無人傷亡"
  },
  {
    "date": "2016/3/30",
    "year": 2016,
    "month": 3,
    "day": 30,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西最大黨宣布退出執政聯盟"
  },
  {
    "date": "2016/3/30",
    "year": 2016,
    "month": 3,
    "day": 30,
    "area": "歐洲",
    "place": "德國",
    "title": "「空巴」德國國防電子事業出售案獲德國政府批准"
  },
  {
    "date": "2016/3/30",
    "year": 2016,
    "month": 3,
    "day": 30,
    "area": "歐洲",
    "place": "英國",
    "title": "英國央行：脫歐公投恐影響金融穩定"
  },
  {
    "date": "2016/3/30",
    "year": 2016,
    "month": 3,
    "day": 30,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "布魯塞爾恐攻前，FBI曾向荷蘭發出警告"
  },
  {
    "date": "2016/3/30",
    "year": 2016,
    "month": 3,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "美政府下令駐土耳其南部的軍事及外交人員眷屬撤離"
  },
  {
    "date": "2016/3/30",
    "year": 2016,
    "month": 3,
    "day": 30,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸首位文人總統宣誓就職，翁山蘇姬擁4官職"
  },
  {
    "date": "2016/3/31",
    "year": 2016,
    "month": 3,
    "day": 31,
    "area": "非洲",
    "place": "烏干達",
    "title": "非洲成為以色列結盟新對象"
  },
  {
    "date": "2016/3/31",
    "year": 2016,
    "month": 3,
    "day": 31,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉國會通過政治犯特赦法案，總統揚言否決"
  },
  {
    "date": "2016/3/31",
    "year": 2016,
    "month": 3,
    "day": 31,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞第二大叛軍組織宣布將與政府展開和談"
  },
  {
    "date": "2016/3/31",
    "year": 2016,
    "month": 3,
    "day": 31,
    "area": "歐洲",
    "place": "法國",
    "title": "法國總統宣布取消修憲計畫"
  },
  {
    "date": "2016/3/31",
    "year": 2016,
    "month": 3,
    "day": 31,
    "area": "北美洲",
    "place": "美國",
    "title": "美國擬在東歐加強軍事力量以嚇阻俄國"
  },
  {
    "date": "2016/3/31",
    "year": 2016,
    "month": 3,
    "day": 31,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大外長揭櫫新外交政策原則"
  },
  {
    "date": "2016/3/31",
    "year": 2016,
    "month": 3,
    "day": 31,
    "area": "北美洲",
    "place": "美國",
    "title": "中國大陸若劃設南海防空識別區，美國：不會承認"
  },
  {
    "date": "2016/3/31",
    "year": 2016,
    "month": 3,
    "day": 31,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "雙英會：承諾政權順利轉移"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "14年償債糾紛終落幕，阿根廷將重返國際資本市場"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西奧運開幕倒數，負責維安的三軍統帥突請辭"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」擬於下週遣返500名移民"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時將把巴黎恐攻嫌犯引渡至法國"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "美日韓峰會矢言遏止北韓威脅"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "美「中」領導人同意在北韓問題上合作"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "亞洲",
    "place": "日本",
    "title": "日本外務大臣岸田文雄擬4月訪問北京"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲大學歷史用詞爭議，昆士蘭省長：學生應知道事實"
  },
  {
    "date": "2016/4/1",
    "year": 2016,
    "month": 4,
    "day": 1,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "美國對臺灣消除核武原料表示肯定"
  },
  {
    "date": "2016/4/6",
    "year": 2016,
    "month": 4,
    "day": 6,
    "area": "非洲",
    "place": "盧安達",
    "title": "美無人機將在盧安達配送醫療物資"
  },
  {
    "date": "2016/4/6",
    "year": 2016,
    "month": 4,
    "day": 6,
    "area": "中南美洲",
    "place": "多明尼加",
    "title": "駐多明尼加區美珍命案，多國警方宣布偵破"
  },
  {
    "date": "2016/4/6",
    "year": 2016,
    "month": 4,
    "day": 6,
    "area": "中南美洲",
    "place": "巴拿馬",
    "title": "「巴拿馬文件」曝光，事務所創辦人：遭駭客入侵"
  },
  {
    "date": "2016/4/6",
    "year": 2016,
    "month": 4,
    "day": 6,
    "area": "歐洲",
    "place": "希臘",
    "title": "教宗方濟各擬於下週前往希臘探望難民"
  },
  {
    "date": "2016/4/6",
    "year": 2016,
    "month": 4,
    "day": 6,
    "area": "歐洲",
    "place": "冰島",
    "title": "「巴拿馬文件」曝光，冰島總理請辭"
  },
  {
    "date": "2016/4/6",
    "year": 2016,
    "month": 4,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "威斯康辛州初選，克魯茲、桑德斯勝出"
  },
  {
    "date": "2016/4/7",
    "year": 2016,
    "month": 4,
    "day": 7,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "西非「拉薩熱」疫情已致164死"
  },
  {
    "date": "2016/4/7",
    "year": 2016,
    "month": 4,
    "day": 7,
    "area": "中南美洲",
    "place": "巴拿馬",
    "title": "巴拿馬文件風暴：巴拿馬政府宣布設立獨立委員會"
  },
  {
    "date": "2016/4/7",
    "year": 2016,
    "month": 4,
    "day": 7,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "荷蘭諮詢性公投否決「歐盟」與烏克蘭協定"
  },
  {
    "date": "2016/4/7",
    "year": 2016,
    "month": 4,
    "day": 7,
    "area": "歐洲",
    "place": "比利時",
    "title": "布魯塞爾恐攻嫌犯曾在歐洲議會擔任清潔工"
  },
  {
    "date": "2016/4/7",
    "year": 2016,
    "month": 4,
    "day": 7,
    "area": "歐洲",
    "place": "冰島",
    "title": "冰島「進步黨」副黨魁接任總理一職"
  },
  {
    "date": "2016/4/7",
    "year": 2016,
    "month": 4,
    "day": 7,
    "area": "亞洲",
    "place": "日本",
    "title": "日本自衛隊軍機墜毀，機上6人全數罹難"
  },
  {
    "date": "2016/4/7",
    "year": 2016,
    "month": 4,
    "day": 7,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓：北韓有能力在「蘆洞」飛彈上安裝核彈頭"
  },
  {
    "date": "2016/4/7",
    "year": 2016,
    "month": 4,
    "day": 7,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "美國「全球入境計畫」納入臺灣"
  },
  {
    "date": "2016/4/8",
    "year": 2016,
    "month": 4,
    "day": 8,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞總統籲德國擴大對非洲投資"
  },
  {
    "date": "2016/4/8",
    "year": 2016,
    "month": 4,
    "day": 8,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉總統揚言修憲，縮短國會任期"
  },
  {
    "date": "2016/4/8",
    "year": 2016,
    "month": 4,
    "day": 8,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "憂川普反墨言論，墨西哥政府指派新任駐美大使"
  },
  {
    "date": "2016/4/8",
    "year": 2016,
    "month": 4,
    "day": 8,
    "area": "歐洲",
    "place": "希臘",
    "title": "希臘展開第二波遣返移民行動"
  },
  {
    "date": "2016/4/8",
    "year": 2016,
    "month": 4,
    "day": 8,
    "area": "歐洲",
    "place": "英國",
    "title": "英國首相坦承曾持有境外基金股份"
  },
  {
    "date": "2016/4/8",
    "year": 2016,
    "month": 4,
    "day": 8,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟執委會擬成立難民庇護中央系統"
  },
  {
    "date": "2016/4/8",
    "year": 2016,
    "month": 4,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "美國就業市場持續復甦，上週初領失業救濟金人數減少"
  },
  {
    "date": "2016/4/8",
    "year": 2016,
    "month": 4,
    "day": 8,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大國防部長：自由黨政府不會忽視國防"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "非洲",
    "place": "蘇丹",
    "title": "蘇丹達佛地區將就其行政地位舉行公投"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "出口民調：祕魯總統大選首輪投票，藤森慶子勝出"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "中南美洲",
    "place": "薩爾瓦多",
    "title": "「莫薩克馮賽卡」薩爾瓦多辦公室遭搜索"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "歐洲",
    "place": "烏克蘭",
    "title": "烏克蘭總理請辭，為穩定政局鋪路"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "歐洲",
    "place": "比利時",
    "title": "布魯塞爾恐攻份子原先的目標是再度攻擊巴黎"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "介入利比亞卻規劃不周，歐巴馬稱任內最大錯誤"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大原住民社區進入緊急狀態"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "亞洲",
    "place": "葉門",
    "title": "葉門交戰雙方暫時停火，本月下旬舉行談判"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "亞洲",
    "place": "日本",
    "title": "G7外長在日本廣島召開會議"
  },
  {
    "date": "2016/4/11",
    "year": 2016,
    "month": 4,
    "day": 11,
    "area": "亞洲",
    "place": "南韓",
    "title": "北韓高階軍官罕見叛逃南韓"
  },
  {
    "date": "2016/4/12",
    "year": 2016,
    "month": 4,
    "day": 12,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "土耳其貨輪在奈及利亞外海遭海盜攻擊，6名船員遭挾持"
  },
  {
    "date": "2016/4/12",
    "year": 2016,
    "month": 4,
    "day": 12,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西眾議院特別審查委員會通過總統彈劾案，啟動彈劾程序"
  },
  {
    "date": "2016/4/12",
    "year": 2016,
    "month": 4,
    "day": 12,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉最高法院裁定特赦案違憲"
  },
  {
    "date": "2016/4/12",
    "year": 2016,
    "month": 4,
    "day": 12,
    "area": "歐洲",
    "place": "法國",
    "title": "法國政府將提供5億歐元補助，盼澆熄學生怒火"
  },
  {
    "date": "2016/4/12",
    "year": 2016,
    "month": 4,
    "day": 12,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟考慮取消美國免簽待遇"
  },
  {
    "date": "2016/4/12",
    "year": 2016,
    "month": 4,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "美衛生官員：茲卡病毒比預期更可怕"
  },
  {
    "date": "2016/4/12",
    "year": 2016,
    "month": 4,
    "day": 12,
    "area": "亞洲",
    "place": "日本",
    "title": "G7外長發表「廣島宣言」，籲提升擁核透明度"
  },
  {
    "date": "2016/4/13",
    "year": 2016,
    "month": 4,
    "day": 13,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "聯合國：「博科聖地」利用更多孩童發動自殺炸彈攻擊"
  },
  {
    "date": "2016/4/13",
    "year": 2016,
    "month": 4,
    "day": 13,
    "area": "中南美洲",
    "place": "巴西",
    "title": "支持彈劾羅賽芙，巴西進步黨退出執政聯盟"
  },
  {
    "date": "2016/4/13",
    "year": 2016,
    "month": 4,
    "day": 13,
    "area": "歐洲",
    "place": "德國",
    "title": "G20高峰會本週末登場，德國財長將呼籲結束低利率政策"
  },
  {
    "date": "2016/4/13",
    "year": 2016,
    "month": 4,
    "day": 13,
    "area": "歐洲",
    "place": "奧地利",
    "title": "加強奧義邊界管制，奧地利建管制區"
  },
  {
    "date": "2016/4/13",
    "year": 2016,
    "month": 4,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "美國總統歐巴馬為同工同酬發聲"
  },
  {
    "date": "2016/4/13",
    "year": 2016,
    "month": 4,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "美國國務卿凱瑞為自貿協定辯護"
  },
  {
    "date": "2016/4/13",
    "year": 2016,
    "month": 4,
    "day": 13,
    "area": "亞洲",
    "place": "越南",
    "title": "日本護衛艦二戰後首度停靠越南金蘭灣"
  },
  {
    "date": "2016/4/13",
    "year": 2016,
    "month": 4,
    "day": 13,
    "area": "亞洲",
    "place": "印度",
    "title": "印美原則上同意支援彼此軍事後勤"
  },
  {
    "date": "2016/4/14",
    "year": 2016,
    "month": 4,
    "day": 14,
    "area": "非洲",
    "place": "蘇丹",
    "title": "蘇丹達佛完成公投，叛軍指控政府操縱投票"
  },
  {
    "date": "2016/4/14",
    "year": 2016,
    "month": 4,
    "day": 14,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "激進組織「博科聖地」釋影片，證明遭綁架女學生中仍有存活者"
  },
  {
    "date": "2016/4/14",
    "year": 2016,
    "month": 4,
    "day": 14,
    "area": "中南美洲",
    "place": "巴拿馬",
    "title": "對洩密律師事務所提告，巴拿馬檢方：沒有證據"
  },
  {
    "date": "2016/4/14",
    "year": 2016,
    "month": 4,
    "day": 14,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "美軍：俄「蘇愷」戰機多次低空飛掠美艦"
  },
  {
    "date": "2016/4/14",
    "year": 2016,
    "month": 4,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬赴CIA總部，表達對抗「伊斯蘭國」決心"
  },
  {
    "date": "2016/4/14",
    "year": 2016,
    "month": 4,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "美國衛生官員證實茲卡病毒會造成新生兒缺陷"
  },
  {
    "date": "2016/4/14",
    "year": 2016,
    "month": 4,
    "day": 14,
    "area": "亞洲",
    "place": "南韓",
    "title": "韓國會大選結果出爐，執政黨席次未過半"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "非洲",
    "place": "迦納",
    "title": "迦納政府文件示警：伊斯蘭武裝分子鎖定迦納與鄰國多哥"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "捲入洗錢案，阿根廷前總統聲稱遭政治迫害"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞出現首起茲卡病毒引發之小頭症病例"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "歐洲",
    "place": "德國",
    "title": "德國將制定首部移民融入法"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "歐洲",
    "place": "烏克蘭",
    "title": "烏克蘭國會議長接任總理"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "美國防部長將在南海登航母視察"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "俄國戰機掠過美驅逐艦，美國務卿凱瑞予以譴責"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大向國會提交安樂死法案"
  },
  {
    "date": "2016/4/15",
    "year": 2016,
    "month": 4,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "日本強震造成至少9死860傷"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "非洲",
    "place": "利比亞",
    "title": "德法外長共同出訪利比亞，展現對新政府之支持立場"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "衣索比亞：南蘇丹武裝分子在邊界地區殺害140人"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "中南美洲",
    "place": "厄瓜多爾",
    "title": "厄瓜多7.8強震，至少272死"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "歐洲",
    "place": "比利時",
    "title": "布魯塞爾數千人參加反恐大遊行"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "歐洲",
    "place": "希臘",
    "title": "教宗訪希臘，帶回12名敘利亞難民"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美國稱俄國戰機對美偵察機做出挑釁舉動，俄方予以反駁"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "「共和黨」懷州總統初選，克魯茲大獲全勝"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "亞洲",
    "place": "緬甸",
    "title": "翁山蘇姬矢言修憲，建立緬甸民主制度"
  },
  {
    "date": "2016/4/18",
    "year": 2016,
    "month": 4,
    "day": 18,
    "area": "亞洲",
    "place": "日本",
    "title": "熊本強震：日本政府感謝臺灣各界關心"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "非洲",
    "place": "馬利",
    "title": "紅十字國際委員會：3名工作人員在馬利北部失聯"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "衣索比亞軍隊試圖搶救遭南蘇丹穆勒族挾持之孩童"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "中南美洲",
    "place": "瓜地馬拉",
    "title": "瓜地馬拉前總統被控收受船務公司賄款"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西眾議院通過總統彈劾案"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄烏總統通電，商討俄兵與女飛官換囚"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "歐洲",
    "place": "義大利",
    "title": "地中海再傳難民船翻覆，數百人恐溺斃"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "德州罕見暴雨造成5人死亡"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "亞洲",
    "place": "日本",
    "title": "熊本強震：安倍稱最受臺灣慰問之語激勵"
  },
  {
    "date": "2016/4/19",
    "year": 2016,
    "month": 4,
    "day": 19,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "有效打擊IS，華府擬加派駐伊美軍"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "非洲",
    "place": "尚比亞",
    "title": "尚比亞首都發生排外暴動，逾250人被捕"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "南蘇丹和平協議遲未落實，聯合國表達關切"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "中南美洲",
    "place": "厄瓜多",
    "title": "厄瓜多強震，國際救援湧入災區"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利提議發行歐盟移民債券遭德國反對"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "歐洲",
    "place": "德國",
    "title": "涉嫌煽動種族仇恨，德國反移民Pegida創辦人出庭受審"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "川普、柯琳頓贏得紐約州總統初選"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "美國總統歐巴馬赴沙烏地阿拉伯進行訪問"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "阿富汗首都驚傳「塔利班」貨車炸彈襲擊"
  },
  {
    "date": "2016/4/20",
    "year": 2016,
    "month": 4,
    "day": 20,
    "area": "亞洲",
    "place": "日本",
    "title": "安倍擬放棄於春季大祭期間參拜「靖國神社」"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "南蘇丹交戰雙方達成共識，叛軍領袖將返國共組團結政府"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥石化工廠爆炸，3死百餘人受傷"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "中南美洲",
    "place": "薩爾瓦多",
    "title": "打擊犯罪集團，薩爾瓦多部署特種部隊"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "歐洲",
    "place": "瑞士",
    "title": "地中海難民船翻覆，聯合國：恐500人罹難"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "歐洲",
    "place": "德國",
    "title": "德國請求比利時暫時關閉2座核反應爐遭拒"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "美國紙鈔將首次出現非裔女性頭像"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "美國就「巴拿馬文件」展開刑事調查"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "美軍開始以B-52轟炸機打擊IS"
  },
  {
    "date": "2016/4/21",
    "year": 2016,
    "month": 4,
    "day": 21,
    "area": "亞洲",
    "place": "葉門",
    "title": "「聯合國」：葉門即將展開和平談判"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "非洲",
    "place": "南非",
    "title": "南非總統公布軍售弊案調查報告，證明自己清白"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "非洲",
    "place": "查德",
    "title": "查德公布總統大選結果，現任總統德比5度連任"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "中南美洲",
    "place": "厄瓜多",
    "title": "籌災後重建資金，厄瓜多課徵富人稅"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥總統提案將藥用大麻合法化"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "歐洲",
    "place": "英國",
    "title": "歐巴馬訪問英國，呼籲英國續留歐盟"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "土耳其要求荷蘭僑民回報辱土言論，引發荷蘭不滿"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "加州發現長達800公尺的美墨毒品走私地道"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "美國務卿與伊朗外長將就解除經濟制裁進行討論"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓：日直升機護衛艦「伊勢號」將於下週來訪"
  },
  {
    "date": "2016/4/22",
    "year": 2016,
    "month": 4,
    "day": 22,
    "area": "兩岸三地",
    "place": "香港",
    "title": "港「泛民」中青代發表「香港前途決議文」"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "非洲",
    "place": "埃及",
    "title": "面對抗議聲浪，埃及總統呼籲人民捍衛國家"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "非洲",
    "place": "蘇丹",
    "title": "蘇丹達佛公投出爐，將維持5個省的行政狀態"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "中南美洲",
    "place": "薩爾瓦多",
    "title": "中華民國海軍敦睦支隊訪問薩爾瓦多"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "歐洲",
    "place": "塞爾維亞",
    "title": "塞爾維亞國會選舉結果出爐，親歐派大勝"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "歐洲",
    "place": "德國",
    "title": "民調：德國人對TTIP支持率僅17%"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "北韓提議暫停核試，歐巴馬：不會當真"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大總理在「聯合國」總部簽署巴黎氣候協定"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼政府擬設危機處理中心，迅速回應海外公民安全事件"
  },
  {
    "date": "2016/4/25",
    "year": 2016,
    "month": 4,
    "day": 25,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓外長：美若停止美韓軍演，北韓將暫停核試"
  },
  {
    "date": "2016/4/26",
    "year": 2016,
    "month": 4,
    "day": 26,
    "area": "歐洲",
    "place": "德國",
    "title": "德國移民局：北非移民人數銳減"
  },
  {
    "date": "2016/4/26",
    "year": 2016,
    "month": 4,
    "day": 26,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大人質遭菲律賓激進組織殺害"
  },
  {
    "date": "2016/4/26",
    "year": 2016,
    "month": 4,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "前美國官員：美國應支持臺灣在肯亞案立場"
  },
  {
    "date": "2016/4/26",
    "year": 2016,
    "month": 4,
    "day": 26,
    "area": "亞洲",
    "place": "澳洲",
    "title": "法國拿下澳洲新一代潛艦訂單"
  },
  {
    "date": "2016/4/26",
    "year": 2016,
    "month": 4,
    "day": 26,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓可能準備試射舞水端中程飛彈"
  },
  {
    "date": "2016/4/27",
    "year": 2016,
    "month": 4,
    "day": 27,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "南蘇丹叛軍領袖重返首都擔任副總統"
  },
  {
    "date": "2016/4/27",
    "year": 2016,
    "month": 4,
    "day": 27,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西：今年「茲卡」疑似病例逾9萬起"
  },
  {
    "date": "2016/4/27",
    "year": 2016,
    "month": 4,
    "day": 27,
    "area": "中南美洲",
    "place": "瓜地馬拉",
    "title": "臺灣向瓜國副總統辦公室捐贈電腦"
  },
  {
    "date": "2016/4/27",
    "year": 2016,
    "month": 4,
    "day": 27,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙新政府難產，6月重新舉行國會大選"
  },
  {
    "date": "2016/4/27",
    "year": 2016,
    "month": 4,
    "day": 27,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加國總理：絕對不會支付贖金給恐怖份子"
  },
  {
    "date": "2016/4/27",
    "year": 2016,
    "month": 4,
    "day": 27,
    "area": "北美洲",
    "place": "美國",
    "title": "美國東北5州初選：川普全贏、柯琳頓贏4州"
  },
  {
    "date": "2016/4/27",
    "year": 2016,
    "month": 4,
    "day": 27,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "日本直升機護衛艦「伊勢號」抵菲律賓訪問"
  },
  {
    "date": "2016/4/27",
    "year": 2016,
    "month": 4,
    "day": 27,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓勞動黨5月舉行全國代表大會，36年來首見"
  },
  {
    "date": "2016/4/28",
    "year": 2016,
    "month": 4,
    "day": 28,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "「歐盟」將與奈及利亞就遣返經濟移民展開協商"
  },
  {
    "date": "2016/4/28",
    "year": 2016,
    "month": 4,
    "day": 28,
    "area": "中南美洲",
    "place": "宏都拉斯",
    "title": "臺灣向宏都拉斯捐贈「茲卡」防疫設備"
  },
  {
    "date": "2016/4/28",
    "year": 2016,
    "month": 4,
    "day": 28,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "「臺灣文化嘉年華」在哥倫比亞圓滿落幕"
  },
  {
    "date": "2016/4/28",
    "year": 2016,
    "month": 4,
    "day": 28,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利國會通過新庇護法案，嚴格限制移民入境"
  },
  {
    "date": "2016/4/28",
    "year": 2016,
    "month": 4,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "川普發表外交政策演說，強調「美國優先」"
  },
  {
    "date": "2016/4/28",
    "year": 2016,
    "month": 4,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "美聯準會維持利率不變，6月升息機率增"
  },
  {
    "date": "2016/4/28",
    "year": 2016,
    "month": 4,
    "day": 28,
    "area": "亞洲",
    "place": "巴布亞紐幾內亞",
    "title": "澳洲將就難民收容問題與巴布亞紐幾內亞舉行會談"
  },
  {
    "date": "2016/4/28",
    "year": 2016,
    "month": 4,
    "day": 28,
    "area": "亞洲",
    "place": "日本",
    "title": "日本央行維持利率不變，市場大感意外"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "非洲",
    "place": "莫三比克",
    "title": "英國暫緩向莫三比克提供金援"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "中南美洲",
    "place": "巴拿馬",
    "title": "中華民國海軍敦睦遠航支隊在巴拿馬舉辦歡迎酒會"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "歐洲",
    "place": "奧地利",
    "title": "潘基文批歐洲對難民政策施加重重限制"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "選情不樂觀，桑德斯裁撤數百名工作人員"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "美國第1季經濟成長減至0/5%，創2年新低"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其自殺炸彈攻擊，釀1死13傷"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "亞洲",
    "place": "北韓",
    "title": "南韓官員：北韓再度試射「舞水端」中程彈道飛彈"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "亞洲",
    "place": "印度",
    "title": "印度政府要求英國驅逐印度酒業大亨"
  },
  {
    "date": "2016/4/29",
    "year": 2016,
    "month": 4,
    "day": 29,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "馬總統：日本沖之鳥「是礁非島」"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "非洲",
    "place": "埃及",
    "title": "埃及警方阻止勞工紀念國際勞動節"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞銷毀大量象牙，展現保護非洲象之決心"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "對抗缺電問題，委內瑞拉時間調快半小時"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "歐洲",
    "place": "法國",
    "title": "反勞動法修法，法國示威遊行爆發警民衝突"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "川普重砲抨擊中國大陸對美國貿易順差"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "睽違半世紀，美國郵輪「美麗號」首航古巴"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲企業家萊特向媒體透露自己是比特幣創造者"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓重啟打造船隻導航備用系統之計畫"
  },
  {
    "date": "2016/5/2",
    "year": 2016,
    "month": 5,
    "day": 2,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "不滿漁船遭扣，臺灣召見駐日代表並展開護漁任務"
  },
  {
    "date": "2016/5/3",
    "year": 2016,
    "month": 5,
    "day": 3,
    "area": "非洲",
    "place": "肯亞",
    "title": "IMF：撒哈拉以南非洲經濟成長將創16年來新低"
  },
  {
    "date": "2016/5/3",
    "year": 2016,
    "month": 5,
    "day": 3,
    "area": "非洲",
    "place": "埃及",
    "title": "2名記者遭逮捕，埃及記者協會發動抗議"
  },
  {
    "date": "2016/5/3",
    "year": 2016,
    "month": 5,
    "day": 3,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉反對派擬發動公投罷免總統"
  },
  {
    "date": "2016/5/3",
    "year": 2016,
    "month": 5,
    "day": 3,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟擬給予土耳其申根區免簽通行權"
  },
  {
    "date": "2016/5/3",
    "year": 2016,
    "month": 5,
    "day": 3,
    "area": "歐洲",
    "place": "瑞士",
    "title": "美國國務卿：敘利亞內戰已失控"
  },
  {
    "date": "2016/5/3",
    "year": 2016,
    "month": 5,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "忌憚大陸潛艦頻入印度洋，美印商討合作反潛"
  },
  {
    "date": "2016/5/3",
    "year": 2016,
    "month": 5,
    "day": 3,
    "area": "亞洲",
    "place": "澳洲",
    "title": "通膨率遠低於目標，澳洲央行宣布降息"
  },
  {
    "date": "2016/5/3",
    "year": 2016,
    "month": 5,
    "day": 3,
    "area": "亞洲",
    "place": "印度",
    "title": "捲入洗錢案，印度酒業大亨馬爾雅辭上議院席位"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "前任政府涉武器採購弊案，奈國損失約150億美元"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "非洲",
    "place": "辛巴威",
    "title": "遭逢嚴重乾旱，辛巴威出售野生動物"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西展開「里約奧運」聖火傳遞活動"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙國王解散國會，6月再次大選"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "歐洲",
    "place": "德國",
    "title": "煽動種族仇恨，德國反伊斯蘭組織領袖被判處罰金"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "歐洲",
    "place": "比利時",
    "title": "綠色和平：歐盟可能為追求美歐自貿協定而犧牲環保與公衛標準"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大中部森林大火，數萬人被迫撤離家園"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "印州初選關鍵一役慘敗，克魯茲宣布退選"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "遭菲激進組織綁架之人質懇求政府支付贖金"
  },
  {
    "date": "2016/5/4",
    "year": 2016,
    "month": 5,
    "day": 4,
    "area": "亞洲",
    "place": "葉門",
    "title": "「聯合國」特使：葉門和談4日重啟"
  },
  {
    "date": "2016/5/5",
    "year": 2016,
    "month": 5,
    "day": 5,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西總統遭參院委員會報告人建議彈劾"
  },
  {
    "date": "2016/5/5",
    "year": 2016,
    "month": 5,
    "day": 5,
    "area": "歐洲",
    "place": "英國",
    "title": "英國迎接「超級星期四」選舉日"
  },
  {
    "date": "2016/5/5",
    "year": 2016,
    "month": 5,
    "day": 5,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」提議改革庇護制度，拒收難民恐受罰"
  },
  {
    "date": "2016/5/5",
    "year": 2016,
    "month": 5,
    "day": 5,
    "area": "北美洲",
    "place": "加拿大",
    "title": "白宮：歐巴馬6月29日將在加拿大國會發表演說"
  },
  {
    "date": "2016/5/5",
    "year": 2016,
    "month": 5,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "凱西克宣布退選，「共和黨」總統參選人剩川普一人"
  },
  {
    "date": "2016/5/5",
    "year": 2016,
    "month": 5,
    "day": 5,
    "area": "亞洲",
    "place": "土耳其",
    "title": "與總統關係緊張，土耳其總理達夫托葛魯可能遭解職"
  },
  {
    "date": "2016/5/5",
    "year": 2016,
    "month": 5,
    "day": 5,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "美軍證實澳洲籍IS恐怖分子在伊拉克遭擊斃"
  },
  {
    "date": "2016/5/6",
    "year": 2016,
    "month": 5,
    "day": 6,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "美國有意出售輕型攻擊機，助奈及利亞圍剿激進組織「博科聖地」"
  },
  {
    "date": "2016/5/6",
    "year": 2016,
    "month": 5,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "美共和黨準總統候選人川普支持英國脫歐"
  },
  {
    "date": "2016/5/6",
    "year": 2016,
    "month": 5,
    "day": 6,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞北部難民營遭空襲，造成至少28死"
  },
  {
    "date": "2016/5/6",
    "year": 2016,
    "month": 5,
    "day": 6,
    "area": "亞洲",
    "place": "北韓",
    "title": "睽違36年，北韓「勞動黨」召開黨代會"
  },
  {
    "date": "2016/5/6",
    "year": 2016,
    "month": 5,
    "day": 6,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼、馬來西亞和菲律賓將進行海上聯合巡邏"
  },
  {
    "date": "2016/5/9",
    "year": 2016,
    "month": 5,
    "day": 9,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞擬關閉國內所有難民營，60萬人將流離失所"
  },
  {
    "date": "2016/5/9",
    "year": 2016,
    "month": 5,
    "day": 9,
    "area": "非洲",
    "place": "埃及",
    "title": "埃及8名警察遇襲身亡，「伊斯蘭國」坦承犯案"
  },
  {
    "date": "2016/5/9",
    "year": 2016,
    "month": 5,
    "day": 9,
    "area": "歐洲",
    "place": "希臘",
    "title": "希臘國會為求紓困金，表決通過年金稅改案"
  },
  {
    "date": "2016/5/9",
    "year": 2016,
    "month": 5,
    "day": 9,
    "area": "歐洲",
    "place": "英國",
    "title": "英國地方選舉，蘇格蘭民族黨勝選"
  },
  {
    "date": "2016/5/9",
    "year": 2016,
    "month": 5,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "川普政策大轉彎，贊成提高富人稅和最低工資"
  },
  {
    "date": "2016/5/9",
    "year": 2016,
    "month": 5,
    "day": 9,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大中部野火肆虐，兩成住家遭燒毀"
  },
  {
    "date": "2016/5/9",
    "year": 2016,
    "month": 5,
    "day": 9,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓舉行總統大選，杜特蒂選前民調領先"
  },
  {
    "date": "2016/5/9",
    "year": 2016,
    "month": 5,
    "day": 9,
    "area": "亞洲",
    "place": "北韓",
    "title": "金正恩：國家主權受威脅才會動用核武"
  },
  {
    "date": "2016/5/10",
    "year": 2016,
    "month": 5,
    "day": 10,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞警方動用催淚瓦斯驅離抗議民眾"
  },
  {
    "date": "2016/5/10",
    "year": 2016,
    "month": 5,
    "day": 10,
    "area": "非洲",
    "place": "盧安達",
    "title": "盧安達大雨引發土石流，至少53死"
  },
  {
    "date": "2016/5/10",
    "year": 2016,
    "month": 5,
    "day": 10,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "紀念二戰勝利71週年，俄國舉行盛大閱兵"
  },
  {
    "date": "2016/5/10",
    "year": 2016,
    "month": 5,
    "day": 10,
    "area": "北美洲",
    "place": "美國",
    "title": "歧視同志與跨性別法案引發美司法部與北卡州互告"
  },
  {
    "date": "2016/5/10",
    "year": 2016,
    "month": 5,
    "day": 10,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲國總統大選，杜特蒂當選成定局"
  },
  {
    "date": "2016/5/10",
    "year": 2016,
    "month": 5,
    "day": 10,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲總理宣布解散國會"
  },
  {
    "date": "2016/5/11",
    "year": 2016,
    "month": 5,
    "day": 11,
    "area": "中南美洲",
    "place": "巴拿馬",
    "title": "「巴拿馬文件」資料庫正式上線"
  },
  {
    "date": "2016/5/11",
    "year": 2016,
    "month": 5,
    "day": 11,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "歐美大國下週商討敘利亞危機"
  },
  {
    "date": "2016/5/11",
    "year": 2016,
    "month": 5,
    "day": 11,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大野火肆虐，總理婉謝各國援助"
  },
  {
    "date": "2016/5/11",
    "year": 2016,
    "month": 5,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "民主黨西維吉尼亞州初選，桑德斯獲勝"
  },
  {
    "date": "2016/5/11",
    "year": 2016,
    "month": 5,
    "day": 11,
    "area": "亞洲",
    "place": "日本",
    "title": "歐巴馬將與日相安倍一同訪問廣島"
  },
  {
    "date": "2016/5/12",
    "year": 2016,
    "month": 5,
    "day": 12,
    "area": "非洲",
    "place": "烏干達",
    "title": "烏干達總統就職前夕，警方逮捕反對黨領袖"
  },
  {
    "date": "2016/5/12",
    "year": 2016,
    "month": 5,
    "day": 12,
    "area": "非洲",
    "place": "衣索匹亞",
    "title": "衣索匹亞暴雨引發土石流，奪走數十條人命"
  },
  {
    "date": "2016/5/12",
    "year": 2016,
    "month": 5,
    "day": 12,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西參議院將表決是否彈劾總統羅賽芙"
  },
  {
    "date": "2016/5/12",
    "year": 2016,
    "month": 5,
    "day": 12,
    "area": "歐洲",
    "place": "羅馬尼亞",
    "title": "美飛彈防禦系統在羅馬尼亞正式啟用"
  },
  {
    "date": "2016/5/12",
    "year": 2016,
    "month": 5,
    "day": 12,
    "area": "歐洲",
    "place": "德國",
    "title": "德國展開冷戰後首次擴軍行動"
  },
  {
    "date": "2016/5/12",
    "year": 2016,
    "month": 5,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "禁穆斯林入境美國，川普：倫敦市長例外"
  },
  {
    "date": "2016/5/12",
    "year": 2016,
    "month": 5,
    "day": 12,
    "area": "亞洲",
    "place": "日本",
    "title": "日本：申奧過程乾淨合法"
  },
  {
    "date": "2016/5/12",
    "year": 2016,
    "month": 5,
    "day": 12,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克首都發生3起爆炸案，釀至少88死"
  },
  {
    "date": "2016/5/13",
    "year": 2016,
    "month": 5,
    "day": 13,
    "area": "非洲",
    "place": "烏干達",
    "title": "烏干達總統就職典禮，西方各國代表離席抗議"
  },
  {
    "date": "2016/5/13",
    "year": 2016,
    "month": 5,
    "day": 13,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西參議院通過彈劾案，總統羅賽芙遭停職"
  },
  {
    "date": "2016/5/13",
    "year": 2016,
    "month": 5,
    "day": 13,
    "area": "歐洲",
    "place": "波蘭",
    "title": "美國將在波蘭興建飛彈防禦系統"
  },
  {
    "date": "2016/5/13",
    "year": 2016,
    "month": 5,
    "day": 13,
    "area": "歐洲",
    "place": "瑞士",
    "title": "「茲卡」肆虐，「世衛」籲孕婦避免出席「里約奧運」"
  },
  {
    "date": "2016/5/13",
    "year": 2016,
    "month": 5,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "傳可能參選南韓總統，潘基文月底日韓行受矚目"
  },
  {
    "date": "2016/5/13",
    "year": 2016,
    "month": 5,
    "day": 13,
    "area": "亞洲",
    "place": "南韓",
    "title": "朴槿惠月底將訪問非洲3國"
  },
  {
    "date": "2016/5/13",
    "year": 2016,
    "month": 5,
    "day": 13,
    "area": "亞洲",
    "place": "葉門",
    "title": "葉門軍事基地遭自殺炸彈攻擊"
  },
  {
    "date": "2016/5/13",
    "year": 2016,
    "month": 5,
    "day": 13,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "北京拒絕德國會人權委員會主席訪陸"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "對抗「博科聖地」，法國與奈及利亞同意加強軍事合作"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "非洲",
    "place": "埃及",
    "title": "不滿政府割島，埃及逾百名抗議民眾遭法院重判"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉總統宣布緊急狀態延長60天，在野黨強烈抨擊"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "中南美洲",
    "place": "多明尼加",
    "title": "多明尼加大選，現任總統有望首輪勝出"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "歐洲",
    "place": "德國",
    "title": "德國擬提撥近千億歐元因應難民危機"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "歐洲",
    "place": "法國",
    "title": "世界最大郵輪赴英準備展開處女航"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "北美洲",
    "place": "美國",
    "title": "美國防部報告譴責北京在南海之行徑"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加國亞伯達省野火肆虐，當地政府推出APP提供災民正確消息"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "「伊斯蘭國」對伊拉克天然氣廠發動自殺攻擊"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "亞洲",
    "place": "孟加拉",
    "title": "孟加拉雷擊事件頻傳，造成逾50人死亡"
  },
  {
    "date": "2016/5/16",
    "year": 2016,
    "month": 5,
    "day": 16,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "眼見為憑，臺灣邀請海牙仲裁庭登太平島"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "非洲",
    "place": "利比亞",
    "title": "對抗IS，列強擬提供武器給利比亞政府"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞調漲油價67%，工會揚言全國大罷工"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "非洲",
    "place": "坦尚尼亞",
    "title": "打擊貪腐，坦尚尼亞剷除萬名「幽靈公務員」"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞政府與叛軍就釋放童兵達成協議"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "中南美洲",
    "place": "多明尼加",
    "title": "多明尼加大選，現任總統梅迪納自行宣布當選"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "歐洲",
    "place": "英國",
    "title": "英國情報單位啟用「推特」帳號"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "歐洲",
    "place": "法國",
    "title": "遏止性騷案，法國政府擬延長追訴時效"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大推出跨性別者保護法案"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "亞洲",
    "place": "泰國",
    "title": "泰國將禁止遊客訪問達猜島"
  },
  {
    "date": "2016/5/17",
    "year": 2016,
    "month": 5,
    "day": 17,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓總統當選人主張恢復死刑"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞警察毒打抗議民眾，引發國際撻伐聲浪"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "協商破裂，奈及利亞工會18日將發動罷工"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西財長提名新任央行總裁，盼挽回投資人信心"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥總統提議修憲將同性婚姻合法化"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "歐洲難民危機：人蛇集團去年獲利逾50億美元"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "歐洲",
    "place": "法國",
    "title": "法國政府拒絕撤銷勞改法案"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓再拿下肯塔基州，幾乎篤定獲民主黨總統提名"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美參議院通過911法案，允許受難家屬控告沙國政府"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "亞洲",
    "place": "緬甸",
    "title": "美國放寬對緬甸的經濟制裁"
  },
  {
    "date": "2016/5/18",
    "year": 2016,
    "month": 5,
    "day": 18,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克再度遭爆炸攻擊，造成至少70人死亡"
  },
  {
    "date": "2016/5/19",
    "year": 2016,
    "month": 5,
    "day": 19,
    "area": "非洲",
    "place": "埃及",
    "title": "「埃及航空」MS804航班失聯"
  },
  {
    "date": "2016/5/19",
    "year": 2016,
    "month": 5,
    "day": 19,
    "area": "歐洲",
    "place": "瑞士",
    "title": "憂心「黃熱病」疫情，「世衛」召開緊急會議"
  },
  {
    "date": "2016/5/19",
    "year": 2016,
    "month": 5,
    "day": 19,
    "area": "歐洲",
    "place": "法國",
    "title": "反勞改抗議不斷，法國警方發起「反仇恨警察」示威"
  },
  {
    "date": "2016/5/19",
    "year": 2016,
    "month": 5,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "美商務部將中國大陸冷軋扁鋼進口稅提高至522%"
  },
  {
    "date": "2016/5/19",
    "year": 2016,
    "month": 5,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "世界愛滋病大會，穆斯林國家要求禁止LGBT團體與會"
  },
  {
    "date": "2016/5/19",
    "year": 2016,
    "month": 5,
    "day": 19,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克從「伊斯蘭國」手中收復魯特巴鎮"
  },
  {
    "date": "2016/5/19",
    "year": 2016,
    "month": 5,
    "day": 19,
    "area": "亞洲",
    "place": "印度",
    "title": "印度執政黨在東北省份選舉中取勝，擴大政治版圖"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "非洲",
    "place": "埃及",
    "title": "「埃及航空」MS804航班失聯前曾兩度急轉彎"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "非洲",
    "place": "剛果",
    "title": "剛果反對黨總統候選人遭起訴"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞女學生綁架案，再救出1人"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "阿根廷國會通過「反裁員法」"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉最高法院裁定緊急狀態令合憲"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "歐洲",
    "place": "丹麥",
    "title": "「茲卡」恐因天氣轉熱傳入歐洲"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "歐洲",
    "place": "法國",
    "title": "維護重大賽事安全，法國延長緊急狀態"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "美國國際貿易委員會：TPP將對美國經濟產生溫和刺激效應"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "美國防部：中國大陸戰機在南海攔截美偵察機"
  },
  {
    "date": "2016/5/20",
    "year": 2016,
    "month": 5,
    "day": 20,
    "area": "亞洲",
    "place": "斯里蘭卡",
    "title": "斯里蘭卡土石流淹埋3村，造成58人死亡"
  },
  {
    "date": "2016/5/23",
    "year": 2016,
    "month": 5,
    "day": 23,
    "area": "非洲",
    "place": "利比亞",
    "title": "利比亞攔截850名試圖搭船進入歐洲的非法移民"
  },
  {
    "date": "2016/5/23",
    "year": 2016,
    "month": 5,
    "day": 23,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉經濟陷入混亂，通膨率飆升至720%"
  },
  {
    "date": "2016/5/23",
    "year": 2016,
    "month": 5,
    "day": 23,
    "area": "歐洲",
    "place": "土耳其",
    "title": "土耳其新總理呼籲推行總統制"
  },
  {
    "date": "2016/5/23",
    "year": 2016,
    "month": 5,
    "day": 23,
    "area": "歐洲",
    "place": "希臘",
    "title": "希臘通過新撙節法案，大批民眾走上街頭抗議"
  },
  {
    "date": "2016/5/23",
    "year": 2016,
    "month": 5,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "美軍接收最新型匿蹤驅逐艦「宋瓦特號」"
  },
  {
    "date": "2016/5/23",
    "year": 2016,
    "month": 5,
    "day": 23,
    "area": "亞洲",
    "place": "越南",
    "title": "歐巴馬抵達越南訪問，象徵兩國關係回溫"
  },
  {
    "date": "2016/5/23",
    "year": 2016,
    "month": 5,
    "day": 23,
    "area": "亞洲",
    "place": "日本",
    "title": "駐日美軍涉嫌殺害沖繩女子，美國防部長道歉"
  },
  {
    "date": "2016/5/23",
    "year": 2016,
    "month": 5,
    "day": 23,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "美國重量級議員宣布6月隨團訪臺"
  },
  {
    "date": "2016/5/24",
    "year": 2016,
    "month": 5,
    "day": 24,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞反對黨抗議行動，傳至少1人喪生"
  },
  {
    "date": "2016/5/24",
    "year": 2016,
    "month": 5,
    "day": 24,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西企劃部長捲入醜聞，宣布暫離職務"
  },
  {
    "date": "2016/5/24",
    "year": 2016,
    "month": 5,
    "day": 24,
    "area": "歐洲",
    "place": "奧地利",
    "title": "親歐獨立候選人范德貝倫當選奧地利總統"
  },
  {
    "date": "2016/5/24",
    "year": 2016,
    "month": 5,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬籲「和平解決」南海爭端"
  },
  {
    "date": "2016/5/24",
    "year": 2016,
    "month": 5,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "美中將在夏威夷召開「海上軍事安全磋商機制」"
  },
  {
    "date": "2016/5/24",
    "year": 2016,
    "month": 5,
    "day": 24,
    "area": "亞洲",
    "place": "伊朗",
    "title": "印度與伊朗合作開發戰略港口"
  },
  {
    "date": "2016/5/24",
    "year": 2016,
    "month": 5,
    "day": 24,
    "area": "亞洲",
    "place": "越南",
    "title": "歐巴馬宣布全面對越南解除武器禁運"
  },
  {
    "date": "2016/5/25",
    "year": 2016,
    "month": 5,
    "day": 25,
    "area": "非洲",
    "place": "突尼西亞",
    "title": "重創觀光業，突尼西亞呼籲英國政府解除旅遊警告"
  },
  {
    "date": "2016/5/25",
    "year": 2016,
    "month": 5,
    "day": 25,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴將允許私人中小企業合法化"
  },
  {
    "date": "2016/5/25",
    "year": 2016,
    "month": 5,
    "day": 25,
    "area": "歐洲",
    "place": "希臘",
    "title": "希臘著手安置數千名滯留邊境難民"
  },
  {
    "date": "2016/5/25",
    "year": 2016,
    "month": 5,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "推動以巴復談，美國務卿6月出席巴黎會議"
  },
  {
    "date": "2016/5/25",
    "year": 2016,
    "month": 5,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "美民調：柯琳頓較受亞裔選民青睞"
  },
  {
    "date": "2016/5/25",
    "year": 2016,
    "month": 5,
    "day": 25,
    "area": "亞洲",
    "place": "日本",
    "title": "G7峰會宣言草案將觸及南海問題"
  },
  {
    "date": "2016/5/25",
    "year": 2016,
    "month": 5,
    "day": 25,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓海外餐廳員工再傳集體脫逃"
  },
  {
    "date": "2016/5/25",
    "year": 2016,
    "month": 5,
    "day": 25,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其：不給免簽，國會將阻擋歐土移民協議"
  },
  {
    "date": "2016/5/26",
    "year": 2016,
    "month": 5,
    "day": 26,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西國會批准高達1,705億元公共財政赤字"
  },
  {
    "date": "2016/5/26",
    "year": 2016,
    "month": 5,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "美法律用語禁用「東方人」及「黑人」等歧視性字眼"
  },
  {
    "date": "2016/5/26",
    "year": 2016,
    "month": 5,
    "day": 26,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼宣布性侵兒童罪犯最高可處死刑和化學去勢"
  },
  {
    "date": "2016/5/26",
    "year": 2016,
    "month": 5,
    "day": 26,
    "area": "亞洲",
    "place": "日本",
    "title": "歐洲理事會主席赴日參加G7峰會，呼籲國際一同面對難民問題"
  },
  {
    "date": "2016/5/27",
    "year": 2016,
    "month": 5,
    "day": 27,
    "area": "非洲",
    "place": "南非",
    "title": "南非通過土地徵收法案"
  },
  {
    "date": "2016/5/27",
    "year": 2016,
    "month": 5,
    "day": 27,
    "area": "中南美洲",
    "place": "智利",
    "title": "智利學生上街要求教改，爆發警民衝突"
  },
  {
    "date": "2016/5/27",
    "year": 2016,
    "month": 5,
    "day": 27,
    "area": "歐洲",
    "place": "英國",
    "title": "英國首相：將派遣船艦至地中海打擊走私"
  },
  {
    "date": "2016/5/27",
    "year": 2016,
    "month": 5,
    "day": 27,
    "area": "北美洲",
    "place": "美國",
    "title": "黨代表票達到門檻，川普宣布贏得「共和黨」初選"
  },
  {
    "date": "2016/5/27",
    "year": 2016,
    "month": 5,
    "day": 27,
    "area": "北美洲",
    "place": "加拿大",
    "title": "抵制恐怖組織擄人作法，加國盼G7嚴正反對「交錢放人」"
  },
  {
    "date": "2016/5/27",
    "year": 2016,
    "month": 5,
    "day": 27,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓總統指控中國違反南海協議"
  },
  {
    "date": "2016/5/30",
    "year": 2016,
    "month": 5,
    "day": 30,
    "area": "非洲",
    "place": "利比亞",
    "title": "地中海船難頻傳，約700名移民罹難"
  },
  {
    "date": "2016/5/30",
    "year": 2016,
    "month": 5,
    "day": 30,
    "area": "中南美洲",
    "place": "巴西",
    "title": "茲卡病毒肆虐，WHO拒絕延後巴西奧運或改變場地"
  },
  {
    "date": "2016/5/30",
    "year": 2016,
    "month": 5,
    "day": 30,
    "area": "歐洲",
    "place": "法國",
    "title": "凡爾登戰役100週年，法德領袖並肩獻花圈"
  },
  {
    "date": "2016/5/30",
    "year": 2016,
    "month": 5,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "美國NASA成功搭設首座充氣式太空艙"
  },
  {
    "date": "2016/5/30",
    "year": 2016,
    "month": 5,
    "day": 30,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼在納土那群島海域扣押中國籍漁船"
  },
  {
    "date": "2016/5/30",
    "year": 2016,
    "month": 5,
    "day": 30,
    "area": "亞洲",
    "place": "日本",
    "title": "歐巴馬「廣島行」獲日本民眾高度肯定"
  },
  {
    "date": "2016/5/31",
    "year": 2016,
    "month": 5,
    "day": 31,
    "area": "非洲",
    "place": "塞內加爾",
    "title": "查德前獨裁者犯下違反人道罪，判終身監禁"
  },
  {
    "date": "2016/5/31",
    "year": 2016,
    "month": 5,
    "day": 31,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西臨時政府又一部長請辭"
  },
  {
    "date": "2016/5/31",
    "year": 2016,
    "month": 5,
    "day": 31,
    "area": "歐洲",
    "place": "希臘",
    "title": "希臘海巡隊救起29名移民"
  },
  {
    "date": "2016/5/31",
    "year": 2016,
    "month": 5,
    "day": 31,
    "area": "北美洲",
    "place": "美國",
    "title": "美軍「電磁炮」研發幾近完成階段"
  },
  {
    "date": "2016/5/31",
    "year": 2016,
    "month": 5,
    "day": 31,
    "area": "亞洲",
    "place": "南韓",
    "title": "朴槿惠訪非外交勝利，烏干達將中斷與北韓的軍事合作"
  },
  {
    "date": "2016/5/31",
    "year": 2016,
    "month": 5,
    "day": 31,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "「美中戰略暨經濟對話」6月初在北京召開"
  },
  {
    "date": "2016/6/1",
    "year": 2016,
    "month": 6,
    "day": 1,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "「美洲國家組織」呼籲就委內瑞拉民主危機召開緊急會議"
  },
  {
    "date": "2016/6/1",
    "year": 2016,
    "month": 6,
    "day": 1,
    "area": "歐洲",
    "place": "法國",
    "title": "法國工會再度上街抗議勞改法案"
  },
  {
    "date": "2016/6/1",
    "year": 2016,
    "month": 6,
    "day": 1,
    "area": "歐洲",
    "place": "英國",
    "title": "英民調：「脫歐」支持度較「留歐」多出4%"
  },
  {
    "date": "2016/6/1",
    "year": 2016,
    "month": 6,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "美民調：川普支持度直追柯琳頓"
  },
  {
    "date": "2016/6/2",
    "year": 2016,
    "month": 6,
    "day": 2,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞首都飯店遭炸彈攻擊，至少15死"
  },
  {
    "date": "2016/6/2",
    "year": 2016,
    "month": 6,
    "day": 2,
    "area": "歐洲",
    "place": "法國",
    "title": "巴黎市長宣布將興建難民營"
  },
  {
    "date": "2016/6/2",
    "year": 2016,
    "month": 6,
    "day": 2,
    "area": "歐洲",
    "place": "瑞士",
    "title": "瑞士啟用全球最長鐵路隧道"
  },
  {
    "date": "2016/6/2",
    "year": 2016,
    "month": 6,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "「安理會」發表聲明譴責北韓試射飛彈"
  },
  {
    "date": "2016/6/2",
    "year": 2016,
    "month": 6,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "美方再度邀請中國參與「環太平洋軍演」"
  },
  {
    "date": "2016/6/2",
    "year": 2016,
    "month": 6,
    "day": 2,
    "area": "亞洲",
    "place": "日本",
    "title": "日相安倍宣布消費稅延後調漲"
  },
  {
    "date": "2016/6/3",
    "year": 2016,
    "month": 6,
    "day": 3,
    "area": "非洲",
    "place": "甘比亞",
    "title": "「國際特赦組織」：甘比亞應停止鎮壓異議人士"
  },
  {
    "date": "2016/6/3",
    "year": 2016,
    "month": 6,
    "day": 3,
    "area": "非洲",
    "place": "埃及",
    "title": "法國向埃及交付2艘「西北風級」航母"
  },
  {
    "date": "2016/6/3",
    "year": 2016,
    "month": 6,
    "day": 3,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委國選舉委員會延後與反對黨召開會議"
  },
  {
    "date": "2016/6/3",
    "year": 2016,
    "month": 6,
    "day": 3,
    "area": "歐洲",
    "place": "英國",
    "title": "德國總理籲英國續留「歐盟」"
  },
  {
    "date": "2016/6/3",
    "year": 2016,
    "month": 6,
    "day": 3,
    "area": "歐洲",
    "place": "法國",
    "title": "法國召開會議尋求調停以巴衝突"
  },
  {
    "date": "2016/6/3",
    "year": 2016,
    "month": 6,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬籲美國會通過「聯合國海洋法公約」"
  },
  {
    "date": "2016/6/3",
    "year": 2016,
    "month": 6,
    "day": 3,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其總統：德國種族滅絕決議將重創兩國關係"
  },
  {
    "date": "2016/6/3",
    "year": 2016,
    "month": 6,
    "day": 3,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲總統當選人：不會放棄南海「斯卡伯勒淺灘」權利"
  },
  {
    "date": "2016/6/4",
    "year": 2016,
    "month": 6,
    "day": 4,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "秘魯將舉行總統大選第2輪投票，候選人民調差距甚微"
  },
  {
    "date": "2016/6/4",
    "year": 2016,
    "month": 6,
    "day": 4,
    "area": "歐洲",
    "place": "希臘",
    "title": "難民船在地中海翻覆，數百人仍下落不明"
  },
  {
    "date": "2016/6/4",
    "year": 2016,
    "month": 6,
    "day": 4,
    "area": "歐洲",
    "place": "法國",
    "title": "巴黎塞納河水位暴漲，旅遊景點相繼關閉"
  },
  {
    "date": "2016/6/4",
    "year": 2016,
    "month": 6,
    "day": 4,
    "area": "歐洲",
    "place": "比利時",
    "title": "德法籲「歐盟」建立防務同盟"
  },
  {
    "date": "2016/6/4",
    "year": 2016,
    "month": 6,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "拳王阿里逝世，享壽74歲"
  },
  {
    "date": "2016/6/4",
    "year": 2016,
    "month": 6,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "「天安門事件」滿27週年，美國務院籲北京尊重人權"
  },
  {
    "date": "2016/6/4",
    "year": 2016,
    "month": 6,
    "day": 4,
    "area": "亞洲",
    "place": "日本",
    "title": "日本男童失蹤6天後平安尋獲"
  },
  {
    "date": "2016/6/4",
    "year": 2016,
    "month": 6,
    "day": 4,
    "area": "亞洲",
    "place": "新加坡",
    "title": "香格里拉對話：泰、印支持依國際法解決南海爭端"
  },
  {
    "date": "2016/6/6",
    "year": 2016,
    "month": 6,
    "day": 6,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "祕魯總統大選出口民調：2位候選人難分軒輊"
  },
  {
    "date": "2016/6/6",
    "year": 2016,
    "month": 6,
    "day": 6,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴總統：不會重回「美洲國家組織」"
  },
  {
    "date": "2016/6/6",
    "year": 2016,
    "month": 6,
    "day": 6,
    "area": "歐洲",
    "place": "英國",
    "title": "英國非洲事務大臣：「脫歐」有助英非關係"
  },
  {
    "date": "2016/6/6",
    "year": 2016,
    "month": 6,
    "day": 6,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時發生火車追撞意外，釀至少3死"
  },
  {
    "date": "2016/6/6",
    "year": 2016,
    "month": 6,
    "day": 6,
    "area": "歐洲",
    "place": "瑞士",
    "title": "瑞士民眾公投否決「無條件基本收入」提案"
  },
  {
    "date": "2016/6/6",
    "year": 2016,
    "month": 6,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "美國務卿：中國一旦設南海「防空識別區」恐破壞區域穩定"
  },
  {
    "date": "2016/6/6",
    "year": 2016,
    "month": 6,
    "day": 6,
    "area": "亞洲",
    "place": "澳洲",
    "title": "暴雨肆虐澳洲新南威爾斯，造成3人死亡"
  },
  {
    "date": "2016/6/6",
    "year": 2016,
    "month": 6,
    "day": 6,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣總統蔡英文登沱江艦出航，決心推動國防自主"
  },
  {
    "date": "2016/6/7",
    "year": 2016,
    "month": 6,
    "day": 7,
    "area": "非洲",
    "place": "南非",
    "title": "英澳警告：南非面臨恐攻威脅"
  },
  {
    "date": "2016/6/7",
    "year": 2016,
    "month": 6,
    "day": 7,
    "area": "歐洲",
    "place": "法國",
    "title": "法國洪災肆虐，總理宣布成立緊急基金"
  },
  {
    "date": "2016/6/7",
    "year": 2016,
    "month": 6,
    "day": 7,
    "area": "歐洲",
    "place": "波蘭",
    "title": "「北約」在波蘭舉行大規模聯合軍演"
  },
  {
    "date": "2016/6/7",
    "year": 2016,
    "month": 6,
    "day": 7,
    "area": "亞洲",
    "place": "土耳其",
    "title": "伊斯坦堡發生汽車炸彈攻擊，11人喪生"
  },
  {
    "date": "2016/6/7",
    "year": 2016,
    "month": 6,
    "day": 7,
    "area": "亞洲",
    "place": "新加坡",
    "title": "香格里拉對話：法國籲「歐盟」在南海巡航"
  },
  {
    "date": "2016/6/7",
    "year": 2016,
    "month": 6,
    "day": 7,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "美中第8輪「戰略暨經濟對話」在北京登場"
  },
  {
    "date": "2016/6/8",
    "year": 2016,
    "month": 6,
    "day": 8,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "祕魯總統大選勝負難分，決勝海外選民"
  },
  {
    "date": "2016/6/8",
    "year": 2016,
    "month": 6,
    "day": 8,
    "area": "歐洲",
    "place": "英國",
    "title": "英國「脫歐」公投在即，民調顯示疑歐派人數增加"
  },
  {
    "date": "2016/6/8",
    "year": 2016,
    "month": 6,
    "day": 8,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」推出新救助方案以減緩移民潮"
  },
  {
    "date": "2016/6/8",
    "year": 2016,
    "month": 6,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "五角大廈：美偵察機在東海遭中國戰機「高速」攔截"
  },
  {
    "date": "2016/6/8",
    "year": 2016,
    "month": 6,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "美國總統提名戰最後一哩，柯琳頓可望出線"
  },
  {
    "date": "2016/6/8",
    "year": 2016,
    "month": 6,
    "day": 8,
    "area": "亞洲",
    "place": "巴布亞紐幾內亞",
    "title": "巴布亞紐幾內亞警方朝抗議學生開槍，釀至少4死"
  },
  {
    "date": "2016/6/8",
    "year": 2016,
    "month": 6,
    "day": 8,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "「美中戰略暨經濟對話」閉幕，南海問題仍無共識"
  },
  {
    "date": "2016/6/13",
    "year": 2016,
    "month": 6,
    "day": 13,
    "area": "非洲",
    "place": "迦納",
    "title": "印度總統出訪迦納等非洲3國"
  },
  {
    "date": "2016/6/13",
    "year": 2016,
    "month": 6,
    "day": 13,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉總統：今年不會舉行罷免公投"
  },
  {
    "date": "2016/6/13",
    "year": 2016,
    "month": 6,
    "day": 13,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "祕魯總統候選人藤森惠子承認敗選"
  },
  {
    "date": "2016/6/13",
    "year": 2016,
    "month": 6,
    "day": 13,
    "area": "歐洲",
    "place": "英國",
    "title": "英相卡麥隆：「脫歐」將有損英國經濟"
  },
  {
    "date": "2016/6/13",
    "year": 2016,
    "month": 6,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "美國奧蘭多夜店驚傳槍擊案，共50死53傷"
  },
  {
    "date": "2016/6/13",
    "year": 2016,
    "month": 6,
    "day": 13,
    "area": "亞洲",
    "place": "孟加拉",
    "title": "少數族群頻遭攻擊，孟加拉警方逮5,000人"
  },
  {
    "date": "2016/6/13",
    "year": 2016,
    "month": 6,
    "day": 13,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "德國總理訪中，強調法治重要性"
  },
  {
    "date": "2016/6/14",
    "year": 2016,
    "month": 6,
    "day": 14,
    "area": "非洲",
    "place": "利比亞",
    "title": "利比亞自「伊斯蘭國」奪回關鍵城市"
  },
  {
    "date": "2016/6/14",
    "year": 2016,
    "month": 6,
    "day": 14,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉總統訴請最高法院駁回罷免公投提案"
  },
  {
    "date": "2016/6/14",
    "year": 2016,
    "month": 6,
    "day": 14,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐洲理事會」主席：英國「脫歐」恐造成西方政治文明瓦解"
  },
  {
    "date": "2016/6/14",
    "year": 2016,
    "month": 6,
    "day": 14,
    "area": "歐洲",
    "place": "法國",
    "title": "法國警官住家遇害，「伊斯蘭國」承認犯行"
  },
  {
    "date": "2016/6/14",
    "year": 2016,
    "month": 6,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "奧蘭多夜店槍擊案：歐巴馬稱暫查無外力指使"
  },
  {
    "date": "2016/6/14",
    "year": 2016,
    "month": 6,
    "day": 14,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "全球最危險國家，敘利亞連兩年登榜首"
  },
  {
    "date": "2016/6/14",
    "year": 2016,
    "month": 6,
    "day": 14,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓外長訪古巴及俄羅斯，拉攏北韓盟友"
  },
  {
    "date": "2016/6/15",
    "year": 2016,
    "month": 6,
    "day": 15,
    "area": "非洲",
    "place": "迦納",
    "title": "印度總統稱將在迦納提高貿易投資額"
  },
  {
    "date": "2016/6/15",
    "year": 2016,
    "month": 6,
    "day": 15,
    "area": "中南美洲",
    "place": "巴西",
    "title": "世衛：巴西奧運散播茲卡病毒的風險極低"
  },
  {
    "date": "2016/6/15",
    "year": 2016,
    "month": 6,
    "day": 15,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」駐土耳其代表請辭"
  },
  {
    "date": "2016/6/15",
    "year": 2016,
    "month": 6,
    "day": 15,
    "area": "歐洲",
    "place": "法國",
    "title": "法國民眾上街抗議勞動改革法案，爆發警民衝突"
  },
  {
    "date": "2016/6/15",
    "year": 2016,
    "month": 6,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "美駐「聯合國」副大使籲各國保護LGBT"
  },
  {
    "date": "2016/6/15",
    "year": 2016,
    "month": 6,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "美國「民主黨」總統初選最終戰，柯琳頓獲勝"
  },
  {
    "date": "2016/6/15",
    "year": 2016,
    "month": 6,
    "day": 15,
    "area": "亞洲",
    "place": "緬甸",
    "title": "達賴喇嘛籲翁山蘇姬解決洛興雅難民問題"
  },
  {
    "date": "2016/6/15",
    "year": 2016,
    "month": 6,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "疑挪用公款，東京都知事請辭下台"
  },
  {
    "date": "2016/6/16",
    "year": 2016,
    "month": 6,
    "day": 16,
    "area": "非洲",
    "place": "厄立垂亞",
    "title": "厄立垂亞與衣索匹亞爆發邊界衝突"
  },
  {
    "date": "2016/6/16",
    "year": 2016,
    "month": 6,
    "day": 16,
    "area": "中南美洲",
    "place": "海地",
    "title": "臨時總統任期屆滿，海地恐陷入權力真空"
  },
  {
    "date": "2016/6/16",
    "year": 2016,
    "month": 6,
    "day": 16,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西代理總統捲入巴西國營石油公司賄賂醜聞"
  },
  {
    "date": "2016/6/16",
    "year": 2016,
    "month": 6,
    "day": 16,
    "area": "歐洲",
    "place": "法國",
    "title": "警官遇刺身亡，法國放寬槍枝規定"
  },
  {
    "date": "2016/6/16",
    "year": 2016,
    "month": 6,
    "day": 16,
    "area": "歐洲",
    "place": "德國",
    "title": "德國重申不允許一夫多妻的立場"
  },
  {
    "date": "2016/6/16",
    "year": 2016,
    "month": 6,
    "day": 16,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬第4度在白宮接見達賴喇嘛"
  },
  {
    "date": "2016/6/16",
    "year": 2016,
    "month": 6,
    "day": 16,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "人權團體指「聯合國」援助不公 ，獨惠敘利亞政府軍掌控區"
  },
  {
    "date": "2016/6/16",
    "year": 2016,
    "month": 6,
    "day": 16,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦撥款200萬美元助跨性別族群"
  },
  {
    "date": "2016/6/17",
    "year": 2016,
    "month": 6,
    "day": 17,
    "area": "非洲",
    "place": "利比亞",
    "title": "利比亞又傳自殺汽車炸彈襲擊，10死7傷"
  },
  {
    "date": "2016/6/17",
    "year": 2016,
    "month": 6,
    "day": 17,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西泰梅爾政府，第3位部長請辭下台"
  },
  {
    "date": "2016/6/17",
    "year": 2016,
    "month": 6,
    "day": 17,
    "area": "歐洲",
    "place": "克羅埃西亞",
    "title": "克羅埃西亞國會通過對總理的不信任案"
  },
  {
    "date": "2016/6/17",
    "year": 2016,
    "month": 6,
    "day": 17,
    "area": "歐洲",
    "place": "英國",
    "title": "「脫歐」公投在即，英國「工黨」議員遇害"
  },
  {
    "date": "2016/6/17",
    "year": 2016,
    "month": 6,
    "day": 17,
    "area": "北美洲",
    "place": "美國",
    "title": "桑德斯：願與柯琳頓合作以徹底打敗川普"
  },
  {
    "date": "2016/6/17",
    "year": 2016,
    "month": 6,
    "day": 17,
    "area": "北美洲",
    "place": "加拿大",
    "title": "致力男女平權，加拿大下議院通過國歌內容微調"
  },
  {
    "date": "2016/6/17",
    "year": 2016,
    "month": 6,
    "day": 17,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "聯合國「敘利亞調查委員會」：「伊斯蘭國」屠殺「亞茲迪人」"
  },
  {
    "date": "2016/6/17",
    "year": 2016,
    "month": 6,
    "day": 17,
    "area": "亞洲",
    "place": "巴勒斯坦",
    "title": "巴勒斯坦指控以色列切斷供水，導致巴人齋戒月無水可用"
  },
  {
    "date": "2016/6/20",
    "year": 2016,
    "month": 6,
    "day": 20,
    "area": "非洲",
    "place": "埃及",
    "title": "埃航MS804失事班機尋獲黑盒子"
  },
  {
    "date": "2016/6/20",
    "year": 2016,
    "month": 6,
    "day": 20,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥教師抗議演變為警民衝突，導致6人死亡"
  },
  {
    "date": "2016/6/20",
    "year": 2016,
    "month": 6,
    "day": 20,
    "area": "歐洲",
    "place": "英國",
    "title": "英國23日脫歐公投在即，留歐派聲勢上揚"
  },
  {
    "date": "2016/6/20",
    "year": 2016,
    "month": 6,
    "day": 20,
    "area": "歐洲",
    "place": "義大利",
    "title": "羅馬選出首位女市長"
  },
  {
    "date": "2016/6/20",
    "year": 2016,
    "month": 6,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "美國西南部遭熱浪侵襲，各地紛紛傳出森林大火"
  },
  {
    "date": "2016/6/20",
    "year": 2016,
    "month": 6,
    "day": 20,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大參議院通過安樂死法案"
  },
  {
    "date": "2016/6/20",
    "year": 2016,
    "month": 6,
    "day": 20,
    "area": "亞洲",
    "place": "日本",
    "title": "「沖繩縣民大會」決議要求美陸戰隊撤離"
  },
  {
    "date": "2016/6/20",
    "year": 2016,
    "month": 6,
    "day": 20,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼土石流已造成至少35人喪生"
  },
  {
    "date": "2016/6/21",
    "year": 2016,
    "month": 6,
    "day": 21,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞5名員警遇襲身亡，「索馬利亞青年黨」疑為主謀"
  },
  {
    "date": "2016/6/21",
    "year": 2016,
    "month": 6,
    "day": 21,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "槍手闖入委內瑞拉央行後遭擊斃"
  },
  {
    "date": "2016/6/21",
    "year": 2016,
    "month": 6,
    "day": 21,
    "area": "歐洲",
    "place": "比利時",
    "title": "布魯塞爾市中心商場疑似發現爆裂物"
  },
  {
    "date": "2016/6/21",
    "year": 2016,
    "month": 6,
    "day": 21,
    "area": "歐洲",
    "place": "英國",
    "title": "「歐盟」各國領袖溫情喊話，盼英國選擇「留歐」"
  },
  {
    "date": "2016/6/21",
    "year": 2016,
    "month": 6,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "美國參議院否決4項槍枝管制法案"
  },
  {
    "date": "2016/6/21",
    "year": 2016,
    "month": 6,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "試圖奪警槍射殺川普，英國男子遭起訴"
  },
  {
    "date": "2016/6/21",
    "year": 2016,
    "month": 6,
    "day": 21,
    "area": "亞洲",
    "place": "柬埔寨",
    "title": "南海案宣判在即，柬埔寨總理稱不支持仲裁結果"
  },
  {
    "date": "2016/6/21",
    "year": 2016,
    "month": 6,
    "day": 21,
    "area": "亞洲",
    "place": "印尼",
    "title": "扣船護主權，印尼總統要求持續嚴格執法"
  },
  {
    "date": "2016/6/22",
    "year": 2016,
    "month": 6,
    "day": 22,
    "area": "非洲",
    "place": "剛果",
    "title": "國際刑事法庭：剛果前副總統犯下戰爭罪，判刑18年"
  },
  {
    "date": "2016/6/22",
    "year": 2016,
    "month": 6,
    "day": 22,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉缺糧暴動不斷，美將派特使協助朝野對話"
  },
  {
    "date": "2016/6/22",
    "year": 2016,
    "month": 6,
    "day": 22,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」擬延長對俄經濟制裁"
  },
  {
    "date": "2016/6/22",
    "year": 2016,
    "month": 6,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "美聯準會：英國「脫歐」將對經濟造成重大影響"
  },
  {
    "date": "2016/6/22",
    "year": 2016,
    "month": 6,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "美國強烈譴責北韓試射飛彈之舉"
  },
  {
    "date": "2016/6/22",
    "year": 2016,
    "month": 6,
    "day": 22,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "「聯合國」：700多名醫療人員死於敘利亞內戰"
  },
  {
    "date": "2016/6/22",
    "year": 2016,
    "month": 6,
    "day": 22,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲國總統當選人：不會為南海爭議與中國大陸開戰"
  },
  {
    "date": "2016/6/22",
    "year": 2016,
    "month": 6,
    "day": 22,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "日媒：中國大陸揚言退出海洋法公約"
  },
  {
    "date": "2016/6/23",
    "year": 2016,
    "month": 6,
    "day": 23,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "無國界醫生：奈及利亞難民營近200人餓死"
  },
  {
    "date": "2016/6/23",
    "year": 2016,
    "month": 6,
    "day": 23,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞政府與FARC叛軍達成停火協議"
  },
  {
    "date": "2016/6/23",
    "year": 2016,
    "month": 6,
    "day": 23,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」反對改變南海現狀，促維護南海航行自由"
  },
  {
    "date": "2016/6/23",
    "year": 2016,
    "month": 6,
    "day": 23,
    "area": "歐洲",
    "place": "英國",
    "title": "英國今天舉行脫歐公投，金融市場嚴陣以待"
  },
  {
    "date": "2016/6/23",
    "year": 2016,
    "month": 6,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "美國籲中國大陸於南海仲裁出爐後切勿挑釁"
  },
  {
    "date": "2016/6/23",
    "year": 2016,
    "month": 6,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "要求表決槍管法案，美「民主黨」眾議員占領議場"
  },
  {
    "date": "2016/6/23",
    "year": 2016,
    "month": 6,
    "day": 23,
    "area": "亞洲",
    "place": "印度",
    "title": "印度雨季雷擊2天至少釀93死"
  },
  {
    "date": "2016/6/23",
    "year": 2016,
    "month": 6,
    "day": 23,
    "area": "亞洲",
    "place": "北韓",
    "title": "「安理會」主席籲「聯合國」堅定回應北韓飛彈試射"
  },
  {
    "date": "2016/6/24",
    "year": 2016,
    "month": 6,
    "day": 24,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "維和部隊坐視南蘇丹難民營遇襲，「聯合國」要求撤回"
  },
  {
    "date": "2016/6/24",
    "year": 2016,
    "month": 6,
    "day": 24,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "美洲國家組織：馬杜洛為委國人道危機罪魁禍首"
  },
  {
    "date": "2016/6/24",
    "year": 2016,
    "month": 6,
    "day": 24,
    "area": "歐洲",
    "place": "英國",
    "title": "英國脫歐公投：脫歐派勝出、英鎊重貶"
  },
  {
    "date": "2016/6/24",
    "year": 2016,
    "month": 6,
    "day": 24,
    "area": "歐洲",
    "place": "法國",
    "title": "數千名法國人走上巴黎街頭，抗議勞動改革法案"
  },
  {
    "date": "2016/6/24",
    "year": 2016,
    "month": 6,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "「民主黨」眾議員結束占領議場，矢言續推槍管法案"
  },
  {
    "date": "2016/6/24",
    "year": 2016,
    "month": 6,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "美國最高法院阻擋歐巴馬保證非法移民之行政命令"
  },
  {
    "date": "2016/6/24",
    "year": 2016,
    "month": 6,
    "day": 24,
    "area": "亞洲",
    "place": "日本",
    "title": "英國決定「脫歐」，日相急召內閣商討對策"
  },
  {
    "date": "2016/6/24",
    "year": 2016,
    "month": 6,
    "day": 24,
    "area": "亞洲",
    "place": "印度",
    "title": "全力捍衛主權，印尼總統在軍艦上召開內閣會議"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞部隊自「博科聖地」手中救出5,000名人質"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "中南美洲",
    "place": "巴拿馬",
    "title": "巴拿馬運河拓寬啟用，陸貨輪率先通行"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙國會大選，「人民黨」勝出"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "歐洲",
    "place": "英國",
    "title": "IMF總裁促「歐盟」與英國盡速對英國脫歐問題採取行動"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "歐洲",
    "place": "冰島",
    "title": "冰島選出20年來首位新總統"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "北美洲",
    "place": "美國",
    "title": "美國軍方可望解除跨性別人士服役禁令"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "北美洲",
    "place": "美國",
    "title": "美國西維吉尼亞州百年洪災，造成至少24人罹難"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "再挫「伊斯蘭國」，伊拉克全面收復法魯賈"
  },
  {
    "date": "2016/6/27",
    "year": 2016,
    "month": 6,
    "day": 27,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "俄國總統出訪北京，強調雙邊戰略夥伴關係"
  },
  {
    "date": "2016/6/28",
    "year": 2016,
    "month": 6,
    "day": 28,
    "area": "非洲",
    "place": "南非",
    "title": "南非總統公款私用，財政部追討50萬美元"
  },
  {
    "date": "2016/6/28",
    "year": 2016,
    "month": 6,
    "day": 28,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞軍用直升機墜毀，17人喪生"
  },
  {
    "date": "2016/6/28",
    "year": 2016,
    "month": 6,
    "day": 28,
    "area": "歐洲",
    "place": "德國",
    "title": "英國啟動第50條前，「歐盟」拒展開非正式協商"
  },
  {
    "date": "2016/6/28",
    "year": 2016,
    "month": 6,
    "day": 28,
    "area": "歐洲",
    "place": "英國",
    "title": "英國脫歐影響持續發酵，全球股市哀鴻遍野"
  },
  {
    "date": "2016/6/28",
    "year": 2016,
    "month": 6,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "美國國務院：俄國騷擾美方外交官的情況增加"
  },
  {
    "date": "2016/6/28",
    "year": 2016,
    "month": 6,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "美國最高法院推翻德州對墮胎之限制"
  },
  {
    "date": "2016/6/28",
    "year": 2016,
    "month": 6,
    "day": 28,
    "area": "亞洲",
    "place": "以色列",
    "title": "以色列及土耳其宣布達成和解協議"
  },
  {
    "date": "2016/6/28",
    "year": 2016,
    "month": 6,
    "day": 28,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸宣示反毒決心，「國際禁毒日」焚毀大批毒品"
  },
  {
    "date": "2016/6/29",
    "year": 2016,
    "month": 6,
    "day": 29,
    "area": "非洲",
    "place": "埃及",
    "title": "埃及將英籍黎巴嫩裔政論節目主持人驅逐出境"
  },
  {
    "date": "2016/6/29",
    "year": 2016,
    "month": 6,
    "day": 29,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西員警機場高舉「歡迎光臨地獄」抗議欠薪"
  },
  {
    "date": "2016/6/29",
    "year": 2016,
    "month": 6,
    "day": 29,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐洲議會呼籲英國盡快啟動脫歐程序"
  },
  {
    "date": "2016/6/29",
    "year": 2016,
    "month": 6,
    "day": 29,
    "area": "歐洲",
    "place": "英國",
    "title": "蘇格蘭首席大臣親赴「歐盟」展開外交遊說"
  },
  {
    "date": "2016/6/29",
    "year": 2016,
    "month": 6,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "伊斯坦堡機場遭恐攻，美方強烈譴責"
  },
  {
    "date": "2016/6/29",
    "year": 2016,
    "month": 6,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "美國眾議院公布班加西攻擊事件報告"
  },
  {
    "date": "2016/6/29",
    "year": 2016,
    "month": 6,
    "day": 29,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其機場驚傳恐攻，釀36死147傷"
  },
  {
    "date": "2016/6/29",
    "year": 2016,
    "month": 6,
    "day": 29,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼擬擴建納土那群島軍事設施"
  },
  {
    "date": "2016/6/30",
    "year": 2016,
    "month": 6,
    "day": 30,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "「聯合國」：480萬南蘇丹人將嚴重缺糧"
  },
  {
    "date": "2016/6/30",
    "year": 2016,
    "month": 6,
    "day": 30,
    "area": "中南美洲",
    "place": "瓜地馬拉",
    "title": "瓜地馬拉長期乾旱導致數十萬人面臨飢荒"
  },
  {
    "date": "2016/6/30",
    "year": 2016,
    "month": 6,
    "day": 30,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "南海仲裁案結果將於下月出爐"
  },
  {
    "date": "2016/6/30",
    "year": 2016,
    "month": 6,
    "day": 30,
    "area": "北美洲",
    "place": "加拿大",
    "title": "歐巴馬：英國脫歐或對全球經濟造成長期影響"
  },
  {
    "date": "2016/6/30",
    "year": 2016,
    "month": 6,
    "day": 30,
    "area": "亞洲",
    "place": "蒙古",
    "title": "蒙古主要反對黨拿下國會多數席次"
  },
  {
    "date": "2016/6/30",
    "year": 2016,
    "month": 6,
    "day": 30,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其機場恐攻造成至少41死239傷"
  },
  {
    "date": "2016/7/1",
    "year": 2016,
    "month": 7,
    "day": 1,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞公車遭路邊炸彈攻擊，至少14人喪生"
  },
  {
    "date": "2016/7/1",
    "year": 2016,
    "month": 7,
    "day": 1,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "阿根廷前總統費南德茲涉貪，法官下令搜索多處房產"
  },
  {
    "date": "2016/7/1",
    "year": 2016,
    "month": 7,
    "day": 1,
    "area": "歐洲",
    "place": "英國",
    "title": "脫歐大將強森棄選首相，英國內政大臣呼聲高"
  },
  {
    "date": "2016/7/1",
    "year": 2016,
    "month": 7,
    "day": 1,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟：英國全面脫歐後，才能開始貿易談判"
  },
  {
    "date": "2016/7/1",
    "year": 2016,
    "month": 7,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬擬與俄羅斯聯手打擊敘利亞恐怖份子"
  },
  {
    "date": "2016/7/1",
    "year": 2016,
    "month": 7,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "美國軍方取消對跨性別人士的服役禁令"
  },
  {
    "date": "2016/7/1",
    "year": 2016,
    "month": 7,
    "day": 1,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其機場恐攻罹難者增至43人"
  },
  {
    "date": "2016/7/1",
    "year": 2016,
    "month": 7,
    "day": 1,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "美伊空襲殲滅數百「伊斯蘭國」聖戰士及車輛"
  },
  {
    "date": "2016/7/4",
    "year": 2016,
    "month": 7,
    "day": 4,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉2015年石油收入大減4成"
  },
  {
    "date": "2016/7/4",
    "year": 2016,
    "month": 7,
    "day": 4,
    "area": "歐洲",
    "place": "英國",
    "title": "IMF總裁拉加德：英國脫歐有助「歐盟」改革"
  },
  {
    "date": "2016/7/4",
    "year": 2016,
    "month": 7,
    "day": 4,
    "area": "歐洲",
    "place": "英國",
    "title": "倫敦萬人大遊行，反對英國脫歐"
  },
  {
    "date": "2016/7/4",
    "year": 2016,
    "month": 7,
    "day": 4,
    "area": "亞洲",
    "place": "沙烏地阿拉伯",
    "title": "美國駐吉達領事館附近發生自殺攻擊，造成2人受傷"
  },
  {
    "date": "2016/7/4",
    "year": 2016,
    "month": 7,
    "day": 4,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲國會大選開票，兩大陣營至今無一過半"
  },
  {
    "date": "2016/7/4",
    "year": 2016,
    "month": 7,
    "day": 4,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克首都遭炸彈攻擊，釀至少125死"
  },
  {
    "date": "2016/7/5",
    "year": 2016,
    "month": 7,
    "day": 5,
    "area": "歐洲",
    "place": "英國",
    "title": "英脫歐大將法拉吉辭「獨立黨」黨魁"
  },
  {
    "date": "2016/7/5",
    "year": 2016,
    "month": 7,
    "day": 5,
    "area": "歐洲",
    "place": "比利時",
    "title": "北約「華沙峰會」聚焦三大議題"
  },
  {
    "date": "2016/7/5",
    "year": 2016,
    "month": 7,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "美媒最新民調，柯琳頓僅領先川普6%"
  },
  {
    "date": "2016/7/5",
    "year": 2016,
    "month": 7,
    "day": 5,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加國總理：身分證性別欄擬增「中性」選項"
  },
  {
    "date": "2016/7/5",
    "year": 2016,
    "month": 7,
    "day": 5,
    "area": "亞洲",
    "place": "孟加拉",
    "title": "孟加拉恐攻嫌犯多來自富裕家庭"
  },
  {
    "date": "2016/7/5",
    "year": 2016,
    "month": 7,
    "day": 5,
    "area": "亞洲",
    "place": "沙烏地阿拉伯",
    "title": "沙烏地阿拉伯聖城麥地那遭自殺攻擊"
  },
  {
    "date": "2016/7/6",
    "year": 2016,
    "month": 7,
    "day": 6,
    "area": "非洲",
    "place": "盧安達",
    "title": "「非洲聯盟」推出「單一護照制」"
  },
  {
    "date": "2016/7/6",
    "year": 2016,
    "month": 7,
    "day": 6,
    "area": "中南美洲",
    "place": "智利",
    "title": "智利總統推動高等教育免費方案"
  },
  {
    "date": "2016/7/6",
    "year": 2016,
    "month": 7,
    "day": 6,
    "area": "歐洲",
    "place": "匈牙利",
    "title": "匈牙利10月公投決定是否接受「歐盟」難民配額"
  },
  {
    "date": "2016/7/6",
    "year": 2016,
    "month": 7,
    "day": 6,
    "area": "歐洲",
    "place": "德國",
    "title": "德國各邦要求中央撥款助難民融入社會"
  },
  {
    "date": "2016/7/6",
    "year": 2016,
    "month": 7,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓「電郵門」事件，FBI建議不起訴"
  },
  {
    "date": "2016/7/6",
    "year": 2016,
    "month": 7,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬首次為柯琳頓站台"
  },
  {
    "date": "2016/7/6",
    "year": 2016,
    "month": 7,
    "day": 6,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲總理稱將為選舉結果負全責"
  },
  {
    "date": "2016/7/6",
    "year": 2016,
    "month": 7,
    "day": 6,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克恐攻死亡人數攀升至250人"
  },
  {
    "date": "2016/7/7",
    "year": 2016,
    "month": 7,
    "day": 7,
    "area": "非洲",
    "place": "莫三比克",
    "title": "印度總理出訪非洲4國"
  },
  {
    "date": "2016/7/7",
    "year": 2016,
    "month": 7,
    "day": 7,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西代總統：「里約奧運」維安及「茲卡」風險無虞"
  },
  {
    "date": "2016/7/7",
    "year": 2016,
    "month": 7,
    "day": 7,
    "area": "歐洲",
    "place": "英國",
    "title": "英鎊暴跌，法國取代英國成全球第5大經濟體"
  },
  {
    "date": "2016/7/7",
    "year": 2016,
    "month": 7,
    "day": 7,
    "area": "歐洲",
    "place": "英國",
    "title": "英伊戰調查報告出爐，布萊爾稱願負全責"
  },
  {
    "date": "2016/7/7",
    "year": 2016,
    "month": 7,
    "day": 7,
    "area": "北美洲",
    "place": "美國",
    "title": "戴秉國華府談南海，北京態度轉趨強硬"
  },
  {
    "date": "2016/7/7",
    "year": 2016,
    "month": 7,
    "day": 7,
    "area": "北美洲",
    "place": "美國",
    "title": "電郵案偵察終結，美國司法部不起訴柯琳頓"
  },
  {
    "date": "2016/7/7",
    "year": 2016,
    "month": 7,
    "day": 7,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞政府軍宣布停火72小時"
  },
  {
    "date": "2016/7/7",
    "year": 2016,
    "month": 7,
    "day": 7,
    "area": "亞洲",
    "place": "葉門",
    "title": "葉門亞丁軍事基地遭汽車炸彈攻擊"
  },
  {
    "date": "2016/7/11",
    "year": 2016,
    "month": 7,
    "day": 11,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "南蘇丹首都爆發激戰，至少272人喪生"
  },
  {
    "date": "2016/7/11",
    "year": 2016,
    "month": 7,
    "day": 11,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉上萬民眾湧入哥倫比亞搶購民生物資"
  },
  {
    "date": "2016/7/11",
    "year": 2016,
    "month": 7,
    "day": 11,
    "area": "歐洲",
    "place": "英國",
    "title": "英首相選舉成雙姝對決"
  },
  {
    "date": "2016/7/11",
    "year": 2016,
    "month": 7,
    "day": 11,
    "area": "歐洲",
    "place": "德國",
    "title": "梅克爾促新任英相盡速啟動脫歐程序"
  },
  {
    "date": "2016/7/11",
    "year": 2016,
    "month": 7,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "美國務院將重啟柯琳頓「電郵門」案內部調查"
  },
  {
    "date": "2016/7/11",
    "year": 2016,
    "month": 7,
    "day": 11,
    "area": "亞洲",
    "place": "日本",
    "title": "日參院選舉安倍大勝，拿到修憲門票"
  },
  {
    "date": "2016/7/11",
    "year": 2016,
    "month": 7,
    "day": 11,
    "area": "亞洲",
    "place": "南韓",
    "title": "美韓同意在南韓部署「薩德」飛彈防禦系統"
  },
  {
    "date": "2016/7/12",
    "year": 2016,
    "month": 7,
    "day": 12,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞軍事基地遭自殺炸彈攻擊，8人身亡"
  },
  {
    "date": "2016/7/12",
    "year": 2016,
    "month": 7,
    "day": 12,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉總統不滿「花旗」關閉該國外匯帳戶"
  },
  {
    "date": "2016/7/12",
    "year": 2016,
    "month": 7,
    "day": 12,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "國際仲裁庭將宣布南海仲裁案結果，各方矚目"
  },
  {
    "date": "2016/7/12",
    "year": 2016,
    "month": 7,
    "day": 12,
    "area": "歐洲",
    "place": "義大利",
    "title": "IMF警告：義大利恐陷20年衰退"
  },
  {
    "date": "2016/7/12",
    "year": 2016,
    "month": 7,
    "day": 12,
    "area": "歐洲",
    "place": "英國",
    "title": "英內政大臣梅伊將入主唐寧街"
  },
  {
    "date": "2016/7/12",
    "year": 2016,
    "month": 7,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "美國將增兵560人助伊拉克對抗IS"
  },
  {
    "date": "2016/7/12",
    "year": 2016,
    "month": 7,
    "day": 12,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞反叛軍在阿勒坡市發動攻擊"
  },
  {
    "date": "2016/7/12",
    "year": 2016,
    "month": 7,
    "day": 12,
    "area": "亞洲",
    "place": "印度",
    "title": "喀什米爾爆發示威暴動，釀至少30死"
  },
  {
    "date": "2016/7/13",
    "year": 2016,
    "month": 7,
    "day": 13,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "逾7成南蘇丹人急需人道救助"
  },
  {
    "date": "2016/7/13",
    "year": 2016,
    "month": 7,
    "day": 13,
    "area": "中南美洲",
    "place": "巴西",
    "title": "深陷經濟危機，委內瑞拉尋求巴西庇護人數大增"
  },
  {
    "date": "2016/7/13",
    "year": 2016,
    "month": 7,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "桑德斯為柯琳頓站台，力挺柯入主白宮"
  },
  {
    "date": "2016/7/13",
    "year": 2016,
    "month": 7,
    "day": 13,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克首都又傳汽車炸彈攻擊，釀至少12死"
  },
  {
    "date": "2016/7/13",
    "year": 2016,
    "month": 7,
    "day": 13,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "臺灣：南海仲裁結果「完全無法接受」"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西為「里約奧運」增撥維安經費"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "歐洲",
    "place": "盧森堡",
    "title": "穆斯林女性戴頭巾遭開除，歐盟法院裁定違法"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "歐洲",
    "place": "英國",
    "title": "英相梅伊指派前倫敦市長強生為外相"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利火車對撞意外，至少20死"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "歐洲",
    "place": "英國",
    "title": "英國工黨重選黨魁，柯賓將重披戰袍"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "最新民調：川普在關鍵搖擺州贏過柯琳頓"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "亞洲",
    "place": "日本",
    "title": "日本宮內廳次長否認天皇生前退位報導"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其政府盼與敘利亞建立良好關係"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "亞洲",
    "place": "日本",
    "title": "日本外務省成立「網路安全保障政策室」"
  },
  {
    "date": "2016/7/14",
    "year": 2016,
    "month": 7,
    "day": 14,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "拒絕接受南海仲裁結果，台灣派艦巡航南海"
  },
  {
    "date": "2016/7/15",
    "year": 2016,
    "month": 7,
    "day": 15,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "烏干達部隊赴南蘇丹撤僑"
  },
  {
    "date": "2016/7/15",
    "year": 2016,
    "month": 7,
    "day": 15,
    "area": "中南美洲",
    "place": "巴西",
    "title": "「里約奧運」：氣候因素可望降低「茲卡」傳染率"
  },
  {
    "date": "2016/7/15",
    "year": 2016,
    "month": 7,
    "day": 15,
    "area": "歐洲",
    "place": "法國",
    "title": "法國尼斯國慶遇恐攻，至少75死"
  },
  {
    "date": "2016/7/15",
    "year": 2016,
    "month": 7,
    "day": 15,
    "area": "歐洲",
    "place": "英國",
    "title": "英國脫歐大將強生任外相，歐洲政壇難以接受"
  },
  {
    "date": "2016/7/15",
    "year": 2016,
    "month": 7,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬致電恭賀梅伊出任英相"
  },
  {
    "date": "2016/7/15",
    "year": 2016,
    "month": 7,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬譴責尼斯恐攻，承諾協助法國調查"
  },
  {
    "date": "2016/7/15",
    "year": 2016,
    "month": 7,
    "day": 15,
    "area": "亞洲",
    "place": "蒙古",
    "title": "日相赴蒙古出席亞歐會議，與德國總理展開會談"
  },
  {
    "date": "2016/7/15",
    "year": 2016,
    "month": 7,
    "day": 15,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞總統稱俄羅斯不曾要求他下台"
  },
  {
    "date": "2016/7/18",
    "year": 2016,
    "month": 7,
    "day": 18,
    "area": "非洲",
    "place": "摩洛哥",
    "title": "時隔32年，摩洛哥尋求重新加入「非洲聯盟」"
  },
  {
    "date": "2016/7/18",
    "year": 2016,
    "month": 7,
    "day": 18,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉二度開啟邊界，逾10萬人湧入哥國購買物資"
  },
  {
    "date": "2016/7/18",
    "year": 2016,
    "month": 7,
    "day": 18,
    "area": "歐洲",
    "place": "法國",
    "title": "法國尼斯卡車攻擊事件已有7嫌落網"
  },
  {
    "date": "2016/7/18",
    "year": 2016,
    "month": 7,
    "day": 18,
    "area": "歐洲",
    "place": "英國",
    "title": "蘇格蘭不排除最快明年再辦「脫英」公投"
  },
  {
    "date": "2016/7/18",
    "year": 2016,
    "month": 7,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美媒最新民調：柯琳頓依然領先川普5個百分點"
  },
  {
    "date": "2016/7/18",
    "year": 2016,
    "month": 7,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美國路州又傳殺警案，歐巴馬嚴厲譴責"
  },
  {
    "date": "2016/7/18",
    "year": 2016,
    "month": 7,
    "day": 18,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其軍事政變失敗，至少265死"
  },
  {
    "date": "2016/7/18",
    "year": 2016,
    "month": 7,
    "day": 18,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸將在南海再次舉行軍演"
  },
  {
    "date": "2016/7/19",
    "year": 2016,
    "month": 7,
    "day": 19,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "「聯合國兒童基金會」：奈及利亞近25萬名兒童營養不良"
  },
  {
    "date": "2016/7/19",
    "year": 2016,
    "month": 7,
    "day": 19,
    "area": "歐洲",
    "place": "德國",
    "title": "德國火車持斧砍人事件，5人受傷"
  },
  {
    "date": "2016/7/19",
    "year": 2016,
    "month": 7,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "奧蘭多夜店槍手曾因穆斯林身分遭譏"
  },
  {
    "date": "2016/7/19",
    "year": 2016,
    "month": 7,
    "day": 19,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其總統大規模整肅異己，美歐提出警告"
  },
  {
    "date": "2016/7/19",
    "year": 2016,
    "month": 7,
    "day": 19,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓朝日本海發射三枚彈道飛彈"
  },
  {
    "date": "2016/7/20",
    "year": 2016,
    "month": 7,
    "day": 20,
    "area": "非洲",
    "place": "馬利",
    "title": "馬利軍事基地遭伊斯蘭激進分子攻擊"
  },
  {
    "date": "2016/7/20",
    "year": 2016,
    "month": 7,
    "day": 20,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞將禁止委內瑞拉再度短暫開放邊界"
  },
  {
    "date": "2016/7/20",
    "year": 2016,
    "month": 7,
    "day": 20,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥總統為妻子購屋醜聞道歉"
  },
  {
    "date": "2016/7/20",
    "year": 2016,
    "month": 7,
    "day": 20,
    "area": "歐洲",
    "place": "德國",
    "title": "「伊斯蘭國」：德火車砍人案為旗下「聖戰士」所為"
  },
  {
    "date": "2016/7/20",
    "year": 2016,
    "month": 7,
    "day": 20,
    "area": "歐洲",
    "place": "英國",
    "title": "英政府律師：今年無啟動「脫歐」程序之規劃"
  },
  {
    "date": "2016/7/20",
    "year": 2016,
    "month": 7,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "美「共和黨」正式提名川普為總統候選人"
  },
  {
    "date": "2016/7/20",
    "year": 2016,
    "month": 7,
    "day": 20,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其政府擴大整肅，牽連4萬5,000多人"
  },
  {
    "date": "2016/7/20",
    "year": 2016,
    "month": 7,
    "day": 20,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓：19日飛彈試射為模擬對南韓的核彈攻擊"
  },
  {
    "date": "2016/7/21",
    "year": 2016,
    "month": 7,
    "day": 21,
    "area": "非洲",
    "place": "利比亞",
    "title": "3名法籍士兵在利比亞喪生"
  },
  {
    "date": "2016/7/21",
    "year": 2016,
    "month": 7,
    "day": 21,
    "area": "中南美洲",
    "place": "巴拿馬",
    "title": "巴拿馬就美國入侵巴拿馬事件展開調查"
  },
  {
    "date": "2016/7/21",
    "year": 2016,
    "month": 7,
    "day": 21,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "「歐洲警政署」：歐陸面臨「孤狼式」恐攻風險"
  },
  {
    "date": "2016/7/21",
    "year": 2016,
    "month": 7,
    "day": 21,
    "area": "歐洲",
    "place": "德國",
    "title": "德國接受英國延後「脫歐」之決定"
  },
  {
    "date": "2016/7/21",
    "year": 2016,
    "month": 7,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "克魯茲演說未挺川普，籲黨員「依良心」投票"
  },
  {
    "date": "2016/7/21",
    "year": 2016,
    "month": 7,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "川普稱當選後將放棄防衛「北約」盟國之責"
  },
  {
    "date": "2016/7/21",
    "year": 2016,
    "month": 7,
    "day": 21,
    "area": "亞洲",
    "place": "馬來西亞",
    "title": "美國將沒收大馬主權基金資產，大馬政府：全面配合調查"
  },
  {
    "date": "2016/7/21",
    "year": 2016,
    "month": 7,
    "day": 21,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其總統宣布進入緊急狀態三個月"
  },
  {
    "date": "2016/7/22",
    "year": 2016,
    "month": 7,
    "day": 22,
    "area": "非洲",
    "place": "甘比亞",
    "title": "甘比亞反對黨領袖遭判刑3年"
  },
  {
    "date": "2016/7/22",
    "year": 2016,
    "month": 7,
    "day": 22,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西逮捕10名準備在奧運期間發動恐攻的嫌犯"
  },
  {
    "date": "2016/7/22",
    "year": 2016,
    "month": 7,
    "day": 22,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」籲土耳其遵守法治及人權"
  },
  {
    "date": "2016/7/22",
    "year": 2016,
    "month": 7,
    "day": 22,
    "area": "歐洲",
    "place": "法國",
    "title": "法國逮捕尼斯卡車恐攻5名共犯"
  },
  {
    "date": "2016/7/22",
    "year": 2016,
    "month": 7,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "佛州警方打傷手無寸鐵的非裔治療師"
  },
  {
    "date": "2016/7/22",
    "year": 2016,
    "month": 7,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "川普承諾打造「更安全」的美國"
  },
  {
    "date": "2016/7/22",
    "year": 2016,
    "month": 7,
    "day": 22,
    "area": "亞洲",
    "place": "日本",
    "title": "取消美軍基地遷移許可，日本政府再告沖繩縣府"
  },
  {
    "date": "2016/7/22",
    "year": 2016,
    "month": 7,
    "day": 22,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港3名學運領袖被判有罪"
  },
  {
    "date": "2016/7/25",
    "year": 2016,
    "month": 7,
    "day": 25,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "南蘇丹反對派陣營撤換領導人"
  },
  {
    "date": "2016/7/25",
    "year": 2016,
    "month": 7,
    "day": 25,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西當局持續搜尋準備對奧運發動恐攻之嫌犯"
  },
  {
    "date": "2016/7/25",
    "year": 2016,
    "month": 7,
    "day": 25,
    "area": "歐洲",
    "place": "德國",
    "title": "德國1週內已傳4起攻擊事件"
  },
  {
    "date": "2016/7/25",
    "year": 2016,
    "month": 7,
    "day": 25,
    "area": "歐洲",
    "place": "德國",
    "title": "德國檢方：慕尼黑槍擊案應無政治動機"
  },
  {
    "date": "2016/7/25",
    "year": 2016,
    "month": 7,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "「維基解密」公布電郵，桑德斯疑遭「民主黨」打壓"
  },
  {
    "date": "2016/7/25",
    "year": 2016,
    "month": 7,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓公布副手人選為維州參議員凱恩"
  },
  {
    "date": "2016/7/25",
    "year": 2016,
    "month": 7,
    "day": 25,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "阿富汗和平示威遭炸彈攻擊，至少80死230傷"
  },
  {
    "date": "2016/7/25",
    "year": 2016,
    "month": 7,
    "day": 25,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "華北地區洪災，百餘人死亡失蹤"
  },
  {
    "date": "2016/7/26",
    "year": 2016,
    "month": 7,
    "day": 26,
    "area": "非洲",
    "place": "利比亞",
    "title": "利比亞政府軍從「伊斯蘭國」奪回蘇爾特安全總部"
  },
  {
    "date": "2016/7/26",
    "year": 2016,
    "month": 7,
    "day": 26,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥市長協會要求政府提供安全保護"
  },
  {
    "date": "2016/7/26",
    "year": 2016,
    "month": 7,
    "day": 26,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」：德國連串攻擊事件與難民危機有關"
  },
  {
    "date": "2016/7/26",
    "year": 2016,
    "month": 7,
    "day": 26,
    "area": "歐洲",
    "place": "德國",
    "title": "德國安斯巴赫炸彈客曾宣誓效忠「伊斯蘭國」"
  },
  {
    "date": "2016/7/26",
    "year": 2016,
    "month": 7,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "桑德斯現身「民主黨」全代會，力挺柯琳頓"
  },
  {
    "date": "2016/7/26",
    "year": 2016,
    "month": 7,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "蜜雪兒出席「民主黨」全代會，感性演說打動全場"
  },
  {
    "date": "2016/7/26",
    "year": 2016,
    "month": 7,
    "day": 26,
    "area": "亞洲",
    "place": "日本",
    "title": "日本安養院前員工持刀砍人，造成19死26傷"
  },
  {
    "date": "2016/7/26",
    "year": 2016,
    "month": 7,
    "day": 26,
    "area": "亞洲",
    "place": "寮國",
    "title": "柬埔寨迫菲讓步，「東協」外長公報未提南海仲裁"
  },
  {
    "date": "2016/7/27",
    "year": 2016,
    "month": 7,
    "day": 27,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞首都機場附近傳汽車炸彈攻擊"
  },
  {
    "date": "2016/7/27",
    "year": 2016,
    "month": 7,
    "day": 27,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "秘魯前總統藤森謙也二度申請特赦遭拒"
  },
  {
    "date": "2016/7/27",
    "year": 2016,
    "month": 7,
    "day": 27,
    "area": "歐洲",
    "place": "法國",
    "title": "法國教堂遭恐攻，歐蘭德矢言打擊「伊斯蘭國」"
  },
  {
    "date": "2016/7/27",
    "year": 2016,
    "month": 7,
    "day": 27,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐盟」：愛沙尼亞提早半年接任輪值主席國"
  },
  {
    "date": "2016/7/27",
    "year": 2016,
    "month": 7,
    "day": 27,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓獲提名，成為美國史上首位女性總統候選人"
  },
  {
    "date": "2016/7/27",
    "year": 2016,
    "month": 7,
    "day": 27,
    "area": "北美洲",
    "place": "美國",
    "title": "美「民主黨」高層電郵遭駭，矛頭指向俄羅斯"
  },
  {
    "date": "2016/7/27",
    "year": 2016,
    "month": 7,
    "day": 27,
    "area": "亞洲",
    "place": "寮國",
    "title": "中國大陸：部署「薩德」有損「中」韓互信"
  },
  {
    "date": "2016/7/27",
    "year": 2016,
    "month": 7,
    "day": 27,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "台灣漁船登太平島，攜21桶淡水返航"
  },
  {
    "date": "2016/7/28",
    "year": 2016,
    "month": 7,
    "day": 28,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "阿根廷宣布協助女性暴力受害者的新計畫"
  },
  {
    "date": "2016/7/28",
    "year": 2016,
    "month": 7,
    "day": 28,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉反對派上街抗議選舉委員會延宕公投進度"
  },
  {
    "date": "2016/7/28",
    "year": 2016,
    "month": 7,
    "day": 28,
    "area": "歐洲",
    "place": "法國",
    "title": "防堵恐攻後續效應，法總統邀集宗教領袖磋商"
  },
  {
    "date": "2016/7/28",
    "year": 2016,
    "month": 7,
    "day": 28,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄奧委會：逾250名選手獲准參與本屆奧運"
  },
  {
    "date": "2016/7/28",
    "year": 2016,
    "month": 7,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬力挺柯琳頓：下任總統最佳人選"
  },
  {
    "date": "2016/7/28",
    "year": 2016,
    "month": 7,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "川普對俄公開喊話：找出柯琳頓消失的電郵"
  },
  {
    "date": "2016/7/28",
    "year": 2016,
    "month": 7,
    "day": 28,
    "area": "亞洲",
    "place": "日本",
    "title": "日本首相安倍：將推28兆日圓經濟刺激方案"
  },
  {
    "date": "2016/7/28",
    "year": 2016,
    "month": 7,
    "day": 28,
    "area": "亞洲",
    "place": "印尼",
    "title": "無視國際抗議，印尼將處決14名毒犯"
  },
  {
    "date": "2016/7/29",
    "year": 2016,
    "month": 7,
    "day": 29,
    "area": "中南美洲",
    "place": "瓜地馬拉",
    "title": "瓜地馬拉法官下令對前總統展開貪污調查"
  },
  {
    "date": "2016/7/29",
    "year": 2016,
    "month": 7,
    "day": 29,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "秘魯新總統庫辛斯基宣誓就職"
  },
  {
    "date": "2016/7/29",
    "year": 2016,
    "month": 7,
    "day": 29,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙國王指派代理總理籌組新政府"
  },
  {
    "date": "2016/7/29",
    "year": 2016,
    "month": 7,
    "day": 29,
    "area": "歐洲",
    "place": "挪威",
    "title": "祝賀芬蘭獨立百年，挪威擬贈山峰1座"
  },
  {
    "date": "2016/7/29",
    "year": 2016,
    "month": 7,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "美兩黨總統候選人將聽取情治簡報"
  },
  {
    "date": "2016/7/29",
    "year": 2016,
    "month": 7,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "FBI局長警告：IS一旦遭擊敗，大批恐怖份子恐流亡西方"
  },
  {
    "date": "2016/7/29",
    "year": 2016,
    "month": 7,
    "day": 29,
    "area": "亞洲",
    "place": "南韓",
    "title": "日本在韓成立慰安婦基金會，抗議民眾與警察爆發衝突"
  },
  {
    "date": "2016/7/29",
    "year": 2016,
    "month": 7,
    "day": 29,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸9月將與俄羅斯在南海舉行聯合演習"
  },
  {
    "date": "2016/8/1",
    "year": 2016,
    "month": 8,
    "day": 1,
    "area": "非洲",
    "place": "突尼西亞",
    "title": "突尼西亞國會通過總理不信任案"
  },
  {
    "date": "2016/8/1",
    "year": 2016,
    "month": 8,
    "day": 1,
    "area": "中南美洲",
    "place": "巴西",
    "title": "國際奧委會將成立3人小組，決定俄運動員最終參賽權"
  },
  {
    "date": "2016/8/1",
    "year": 2016,
    "month": 8,
    "day": 1,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時兄弟檔涉嫌策劃恐攻遭逮捕，1起訴1獲釋"
  },
  {
    "date": "2016/8/1",
    "year": 2016,
    "month": 8,
    "day": 1,
    "area": "歐洲",
    "place": "法國",
    "title": "法國教堂恐攻案：警方再度逮捕2名嫌犯"
  },
  {
    "date": "2016/8/1",
    "year": 2016,
    "month": 8,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "美國兩黨總統候選人民調各有領先"
  },
  {
    "date": "2016/8/1",
    "year": 2016,
    "month": 8,
    "day": 1,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "阿富汗美軍基地旁旅館大爆炸，塔利班坦承犯案"
  },
  {
    "date": "2016/8/1",
    "year": 2016,
    "month": 8,
    "day": 1,
    "area": "亞洲",
    "place": "日本",
    "title": "東京選出首位女知事"
  },
  {
    "date": "2016/8/2",
    "year": 2016,
    "month": 8,
    "day": 2,
    "area": "非洲",
    "place": "利比亞",
    "title": "美軍對利比亞境內「伊斯蘭國」發動空襲"
  },
  {
    "date": "2016/8/2",
    "year": 2016,
    "month": 8,
    "day": 2,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉罷免總統公投有譜"
  },
  {
    "date": "2016/8/2",
    "year": 2016,
    "month": 8,
    "day": 2,
    "area": "歐洲",
    "place": "梵蒂岡",
    "title": "教宗方濟各：不能將伊斯蘭教與暴力相提並論"
  },
  {
    "date": "2016/8/2",
    "year": 2016,
    "month": 8,
    "day": 2,
    "area": "歐洲",
    "place": "英國",
    "title": "英國首相暫緩中國大陸投資的核電廠計劃"
  },
  {
    "date": "2016/8/2",
    "year": 2016,
    "month": 8,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "美國邁阿密傳出14起本土「茲卡」病例"
  },
  {
    "date": "2016/8/2",
    "year": 2016,
    "month": 8,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "美國德州新法允許學生攜槍進入校園"
  },
  {
    "date": "2016/8/2",
    "year": 2016,
    "month": 8,
    "day": 2,
    "area": "亞洲",
    "place": "印度",
    "title": "沙國經濟不景氣，逾萬名失業印度勞工受困當地"
  },
  {
    "date": "2016/8/2",
    "year": 2016,
    "month": 8,
    "day": 2,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "俄羅斯軍機在敘利亞遭擊落，機上5人喪生"
  },
  {
    "date": "2016/8/3",
    "year": 2016,
    "month": 8,
    "day": 3,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙代理總理：西班牙將可能面臨第3次大選"
  },
  {
    "date": "2016/8/3",
    "year": 2016,
    "month": 8,
    "day": 3,
    "area": "歐洲",
    "place": "法國",
    "title": "法國各地以安全為由取消夏季活動"
  },
  {
    "date": "2016/8/3",
    "year": 2016,
    "month": 8,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "新加坡總理訪美，籲美國會儘速通過TPP"
  },
  {
    "date": "2016/8/3",
    "year": 2016,
    "month": 8,
    "day": 3,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓試射導彈，落入日本外海"
  },
  {
    "date": "2016/8/3",
    "year": 2016,
    "month": 8,
    "day": 3,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞伊德利布省遭有毒氯氣攻擊"
  },
  {
    "date": "2016/8/4",
    "year": 2016,
    "month": 8,
    "day": 4,
    "area": "非洲",
    "place": "南非",
    "title": "南非地方選舉，執政黨面臨苦戰"
  },
  {
    "date": "2016/8/4",
    "year": 2016,
    "month": 8,
    "day": 4,
    "area": "中南美洲",
    "place": "衣索比亞",
    "title": "熱帶颶風來勢洶洶，貝里斯嚴陣以待"
  },
  {
    "date": "2016/8/4",
    "year": 2016,
    "month": 8,
    "day": 4,
    "area": "歐洲",
    "place": "英國",
    "title": "倫敦傳持刀砍人事件，釀1死5傷"
  },
  {
    "date": "2016/8/4",
    "year": 2016,
    "month": 8,
    "day": 4,
    "area": "歐洲",
    "place": "瑞士",
    "title": "「國際移民組織」：今年逾4,000名移民死亡或失蹤"
  },
  {
    "date": "2016/8/4",
    "year": 2016,
    "month": 8,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "美執法人員首例：華府捷運警察被控向IS提供物資"
  },
  {
    "date": "2016/8/4",
    "year": 2016,
    "month": 8,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "美國麻州通過「薪資平等法」，開啟男女同工同酬新頁"
  },
  {
    "date": "2016/8/4",
    "year": 2016,
    "month": 8,
    "day": 4,
    "area": "亞洲",
    "place": "澳洲",
    "title": "人權團體批澳洲默許虐待難民"
  },
  {
    "date": "2016/8/4",
    "year": 2016,
    "month": 8,
    "day": 4,
    "area": "亞洲",
    "place": "阿拉伯聯合大公國",
    "title": "阿聯酋班機迫降機場後起火，1消防員喪生"
  },
  {
    "date": "2016/8/5",
    "year": 2016,
    "month": 8,
    "day": 5,
    "area": "非洲",
    "place": "南非",
    "title": "南非地方選舉，執政黨恐輸掉主要城市"
  },
  {
    "date": "2016/8/5",
    "year": 2016,
    "month": 8,
    "day": 5,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "阿根廷法官下令逮捕人權組織「五月廣場母親」創辦人"
  },
  {
    "date": "2016/8/5",
    "year": 2016,
    "month": 8,
    "day": 5,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利總理：應中止土耳其入歐談判"
  },
  {
    "date": "2016/8/5",
    "year": 2016,
    "month": 8,
    "day": 5,
    "area": "歐洲",
    "place": "英國",
    "title": "英國央行宣布降息1碼"
  },
  {
    "date": "2016/8/5",
    "year": 2016,
    "month": 8,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "美國務院：支持台灣有意義參與「國際民航組織」"
  },
  {
    "date": "2016/8/5",
    "year": 2016,
    "month": 8,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "美國加州北部連5震，最強達4.5級"
  },
  {
    "date": "2016/8/5",
    "year": 2016,
    "month": 8,
    "day": 5,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "阿富汗旅遊小巴遇襲7傷，塔利班坦承犯案"
  },
  {
    "date": "2016/8/5",
    "year": 2016,
    "month": 8,
    "day": 5,
    "area": "亞洲",
    "place": "泰國",
    "title": "人權團體批泰國軍方打壓反修憲人士"
  },
  {
    "date": "2016/8/8",
    "year": 2016,
    "month": 8,
    "day": 8,
    "area": "非洲",
    "place": "聖多美",
    "title": "聖多美總統杯葛總統大選第二輪選舉"
  },
  {
    "date": "2016/8/8",
    "year": 2016,
    "month": 8,
    "day": 8,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "熱帶颶風橫掃墨西哥，造成38死"
  },
  {
    "date": "2016/8/8",
    "year": 2016,
    "month": 8,
    "day": 8,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時2名女警遭砍傷，「伊斯蘭國」承認犯行"
  },
  {
    "date": "2016/8/8",
    "year": 2016,
    "month": 8,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "美國建議「聯合國」在南蘇丹派駐維和部隊"
  },
  {
    "date": "2016/8/8",
    "year": 2016,
    "month": 8,
    "day": 8,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其總統支持恢復死刑"
  },
  {
    "date": "2016/8/8",
    "year": 2016,
    "month": 8,
    "day": 8,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓總統公布百餘名涉毒政客名單"
  },
  {
    "date": "2016/8/8",
    "year": 2016,
    "month": 8,
    "day": 8,
    "area": "亞洲",
    "place": "伊朗",
    "title": "涉嫌洩露核武機密給美國，伊朗核子專家被處以絞刑"
  },
  {
    "date": "2016/8/8",
    "year": 2016,
    "month": 8,
    "day": 8,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "美國飛彈驅逐艦抵達青島進行交流"
  },
  {
    "date": "2016/8/9",
    "year": 2016,
    "month": 8,
    "day": 9,
    "area": "非洲",
    "place": "衣索匹亞",
    "title": "國際特赦組織：衣索比亞近百名示威民眾遭警方槍殺"
  },
  {
    "date": "2016/8/9",
    "year": 2016,
    "month": 8,
    "day": 9,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "熱帶風暴引發土石流，墨西哥搜尋生還者"
  },
  {
    "date": "2016/8/9",
    "year": 2016,
    "month": 8,
    "day": 9,
    "area": "歐洲",
    "place": "德國",
    "title": "德國與沙烏地阿拉伯合作調查恐攻"
  },
  {
    "date": "2016/8/9",
    "year": 2016,
    "month": 8,
    "day": 9,
    "area": "歐洲",
    "place": "英國",
    "title": "英國鐵路公司員工展開罷工"
  },
  {
    "date": "2016/8/9",
    "year": 2016,
    "month": 8,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "美國務院籲北京釋放遭關押之律師及人權運動者"
  },
  {
    "date": "2016/8/9",
    "year": 2016,
    "month": 8,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "駐外使節遭譏，美召菲外交官赴國務院說明"
  },
  {
    "date": "2016/8/9",
    "year": 2016,
    "month": 8,
    "day": 9,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦醫院遭自殺炸彈攻擊，至少70死"
  },
  {
    "date": "2016/8/9",
    "year": 2016,
    "month": 8,
    "day": 9,
    "area": "亞洲",
    "place": "日本",
    "title": "日本天皇暗示有意生前退位"
  },
  {
    "date": "2016/8/10",
    "year": 2016,
    "month": 8,
    "day": 10,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西參議院投票通過，將對羅塞芙展開彈劾審判"
  },
  {
    "date": "2016/8/10",
    "year": 2016,
    "month": 8,
    "day": 10,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉公布罷免總統公投時程表，反對派強烈不滿"
  },
  {
    "date": "2016/8/10",
    "year": 2016,
    "month": 8,
    "day": 10,
    "area": "歐洲",
    "place": "英國",
    "title": "英國首相梅伊與俄羅斯總統進行電話會談"
  },
  {
    "date": "2016/8/10",
    "year": 2016,
    "month": 8,
    "day": 10,
    "area": "歐洲",
    "place": "德國",
    "title": "德國警方逮捕1涉嫌計畫恐攻的敘利亞難民"
  },
  {
    "date": "2016/8/10",
    "year": 2016,
    "month": 8,
    "day": 10,
    "area": "北美洲",
    "place": "美國",
    "title": "宣揚槍枝管制，全美將同步舉行百場演唱會"
  },
  {
    "date": "2016/8/10",
    "year": 2016,
    "month": 8,
    "day": 10,
    "area": "北美洲",
    "place": "美國",
    "title": "美「共和黨」反川普人士宣布參選總統"
  },
  {
    "date": "2016/8/10",
    "year": 2016,
    "month": 8,
    "day": 10,
    "area": "亞洲",
    "place": "日本",
    "title": "日本外相：與中國大陸關係「明顯惡化」"
  },
  {
    "date": "2016/8/10",
    "year": 2016,
    "month": 8,
    "day": 10,
    "area": "亞洲",
    "place": "印度",
    "title": "印度人權鬥士結束史上最長16年絕食"
  },
  {
    "date": "2016/8/11",
    "year": 2016,
    "month": 8,
    "day": 11,
    "area": "非洲",
    "place": "利比亞",
    "title": "利比亞宣稱已將「伊斯蘭國」逐出蘇爾特"
  },
  {
    "date": "2016/8/11",
    "year": 2016,
    "month": 8,
    "day": 11,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "波哥大當局拆毀惡名昭彰的「布朗克斯貧民區」"
  },
  {
    "date": "2016/8/11",
    "year": 2016,
    "month": 8,
    "day": 11,
    "area": "歐洲",
    "place": "法國",
    "title": "法國南部野火肆虐，數百人撤離家園"
  },
  {
    "date": "2016/8/11",
    "year": 2016,
    "month": 8,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "美軍已在敘伊兩國殲滅逾4萬「伊斯蘭國」戰士"
  },
  {
    "date": "2016/8/11",
    "year": 2016,
    "month": 8,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "THAAD風波延燒，「聯合國」暫不發譴責北韓聲明"
  },
  {
    "date": "2016/8/11",
    "year": 2016,
    "month": 8,
    "day": 11,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其「庫德工人黨」對警車發動攻擊"
  },
  {
    "date": "2016/8/11",
    "year": 2016,
    "month": 8,
    "day": 11,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲國總統揚言若緝毒受阻將實施戒嚴"
  },
  {
    "date": "2016/8/11",
    "year": 2016,
    "month": 8,
    "day": 11,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "阿勒坡留守醫師聯名呼籲歐巴馬設禁航區"
  },
  {
    "date": "2016/8/12",
    "year": 2016,
    "month": 8,
    "day": 12,
    "area": "非洲",
    "place": "尚比亞",
    "title": "尚比亞總統暨國會大選順利落幕"
  },
  {
    "date": "2016/8/12",
    "year": 2016,
    "month": 8,
    "day": 12,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "哥倫比亞與委內瑞拉13日重新開放部分邊境"
  },
  {
    "date": "2016/8/12",
    "year": 2016,
    "month": 8,
    "day": 12,
    "area": "歐洲",
    "place": "烏克蘭",
    "title": "遭俄國指控入侵克里米亞，烏克蘭總統下令進入備戰狀態"
  },
  {
    "date": "2016/8/12",
    "year": 2016,
    "month": 8,
    "day": 12,
    "area": "歐洲",
    "place": "德國",
    "title": "德國內政部長提出新安全措施"
  },
  {
    "date": "2016/8/12",
    "year": 2016,
    "month": 8,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "「聯合國安理會」開會討論克里米亞緊張局勢"
  },
  {
    "date": "2016/8/12",
    "year": 2016,
    "month": 8,
    "day": 12,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大警方擊斃1名「伊斯蘭國」支持者"
  },
  {
    "date": "2016/8/12",
    "year": 2016,
    "month": 8,
    "day": 12,
    "area": "亞洲",
    "place": "泰國",
    "title": "泰國華欣接連發生2起爆炸"
  },
  {
    "date": "2016/8/12",
    "year": 2016,
    "month": 8,
    "day": 12,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓監獄發生爆炸造成10死"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "非洲",
    "place": "剛果中非共和國",
    "title": "剛果小鎮遭屠殺，舉國哀悼3日"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴前領導人卡斯楚慶祝90大壽"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "歐洲",
    "place": "英國",
    "title": "英國脫歐可能延至2019年末"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "歐洲",
    "place": "瑞典",
    "title": "瑞典最年輕部長為酒駕請辭"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "美國2名穆斯林遭槍擊身亡"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "威州非裔男子遭警方擊斃，引發民眾上街抗議"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "日本研發「地對艦飛彈」抗大陸挑釁"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞反抗軍巴士遭自殺炸彈攻擊，至少15死25傷"
  },
  {
    "date": "2016/8/15",
    "year": 2016,
    "month": 8,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "縮短通關時間，日擬派員赴台韓實施境外入境檢查"
  },
  {
    "date": "2016/8/16",
    "year": 2016,
    "month": 8,
    "day": 16,
    "area": "非洲",
    "place": "尚比亞",
    "title": "尚比亞總統連任成功，反對黨痛批作票"
  },
  {
    "date": "2016/8/16",
    "year": 2016,
    "month": 8,
    "day": 16,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥黑幫闖度假餐廳強擄十多人"
  },
  {
    "date": "2016/8/16",
    "year": 2016,
    "month": 8,
    "day": 16,
    "area": "歐洲",
    "place": "德國",
    "title": "德國外長籲俄烏繼續對話，遵守明斯克協議"
  },
  {
    "date": "2016/8/16",
    "year": 2016,
    "month": 8,
    "day": 16,
    "area": "北美洲",
    "place": "美國",
    "title": "「共和黨」總統候選人川普公布其反恐計畫"
  },
  {
    "date": "2016/8/16",
    "year": 2016,
    "month": 8,
    "day": 16,
    "area": "北美洲",
    "place": "美國",
    "title": "美國將15名關灣囚犯移監阿聯"
  },
  {
    "date": "2016/8/16",
    "year": 2016,
    "month": 8,
    "day": 16,
    "area": "亞洲",
    "place": "日本",
    "title": "二戰結束71週年，安倍連續4年未赴「靖國神社」參拜"
  },
  {
    "date": "2016/8/16",
    "year": 2016,
    "month": 8,
    "day": 16,
    "area": "亞洲",
    "place": "葉門",
    "title": "葉門「無國界醫生」醫院遭阿拉伯聯軍空襲"
  },
  {
    "date": "2016/8/16",
    "year": 2016,
    "month": 8,
    "day": 16,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港學運領袖被判社會服務，免於牢獄之災"
  },
  {
    "date": "2016/8/17",
    "year": 2016,
    "month": 8,
    "day": 17,
    "area": "非洲",
    "place": "尚比亞",
    "title": "尚比亞傳總統選舉不公，警方逮捕133名抗議民眾"
  },
  {
    "date": "2016/8/17",
    "year": 2016,
    "month": 8,
    "day": 17,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥大毒梟之子疑遭敵對黑幫擄走"
  },
  {
    "date": "2016/8/17",
    "year": 2016,
    "month": 8,
    "day": 17,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄戰機利用伊朗基地對敘發動空襲，美國表示遺憾"
  },
  {
    "date": "2016/8/17",
    "year": 2016,
    "month": 8,
    "day": 17,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利火車60歲男子持刀砍傷2名青少年"
  },
  {
    "date": "2016/8/17",
    "year": 2016,
    "month": 8,
    "day": 17,
    "area": "北美洲",
    "place": "美國",
    "title": "美國紐約市共有49名孕婦感染茲卡病毒"
  },
  {
    "date": "2016/8/17",
    "year": 2016,
    "month": 8,
    "day": 17,
    "area": "北美洲",
    "place": "美國",
    "title": "美國路易斯安那州大雨成災，釀至少11死"
  },
  {
    "date": "2016/8/17",
    "year": 2016,
    "month": 8,
    "day": 17,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲特種部隊攻下「阿布沙伊夫」3處營地"
  },
  {
    "date": "2016/8/17",
    "year": 2016,
    "month": 8,
    "day": 17,
    "area": "亞洲",
    "place": "美國",
    "title": "南韓潛艦維修時爆炸，釀3死1傷"
  },
  {
    "date": "2016/8/18",
    "year": 2016,
    "month": 8,
    "day": 18,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "南蘇丹政府軍性侵外籍志工，聯合國維和部隊拒絕伸出援手"
  },
  {
    "date": "2016/8/18",
    "year": 2016,
    "month": 8,
    "day": 18,
    "area": "中南美洲",
    "place": "海地",
    "title": "海地霍亂疫情，「聯合國」首度坦承疏失"
  },
  {
    "date": "2016/8/18",
    "year": 2016,
    "month": 8,
    "day": 18,
    "area": "歐洲",
    "place": "德國",
    "title": "德機密報告指土耳其支持恐怖組織，惹惱土國"
  },
  {
    "date": "2016/8/18",
    "year": 2016,
    "month": 8,
    "day": 18,
    "area": "歐洲",
    "place": "法國",
    "title": "法國南部火車撞樹，數十人輕重傷"
  },
  {
    "date": "2016/8/18",
    "year": 2016,
    "month": 8,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美國南加州驚傳大火，當局撤離逾8萬名居民"
  },
  {
    "date": "2016/8/18",
    "year": 2016,
    "month": 8,
    "day": 18,
    "area": "亞洲",
    "place": "印度",
    "title": "印尼國慶日炸沉逾60艘違法外國漁船"
  },
  {
    "date": "2016/8/18",
    "year": 2016,
    "month": 8,
    "day": 18,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其「庫德工人黨」汽車炸彈釀3死數十傷"
  },
  {
    "date": "2016/8/18",
    "year": 2016,
    "month": 8,
    "day": 18,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "中國大陸發射全球首枚量子衛星"
  },
  {
    "date": "2016/8/19",
    "year": 2016,
    "month": 8,
    "day": 19,
    "area": "非洲",
    "place": "剛果中非共和國",
    "title": "遭政府軍追殺，南蘇丹副總統流亡剛果"
  },
  {
    "date": "2016/8/19",
    "year": 2016,
    "month": 8,
    "day": 19,
    "area": "中南美洲",
    "place": "巴西",
    "title": "美國奧運金牌泳將疑謊報里約遇搶"
  },
  {
    "date": "2016/8/19",
    "year": 2016,
    "month": 8,
    "day": 19,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯提議敘利亞停火48小時，以運送人道救援物資"
  },
  {
    "date": "2016/8/19",
    "year": 2016,
    "month": 8,
    "day": 19,
    "area": "歐洲",
    "place": "烏克蘭",
    "title": "烏克蘭3士兵遭親俄叛軍殺害，烏國總統揚言實施戒嚴"
  },
  {
    "date": "2016/8/19",
    "year": 2016,
    "month": 8,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "美國司法部稱將逐步淘汰私營監獄"
  },
  {
    "date": "2016/8/19",
    "year": 2016,
    "month": 8,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "美證實支付伊朗4億美元，作為確保人質獲釋的籌碼"
  },
  {
    "date": "2016/8/19",
    "year": 2016,
    "month": 8,
    "day": 19,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓在38度線附近舉行歷來最大砲兵演訓"
  },
  {
    "date": "2016/8/19",
    "year": 2016,
    "month": 8,
    "day": 19,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓自日本接收首艘多功能巡邏艇"
  },
  {
    "date": "2016/8/22",
    "year": 2016,
    "month": 8,
    "day": 22,
    "area": "非洲",
    "place": "馬利",
    "title": "破壞文化遺址廷巴克圖，馬利叛軍向國際刑事法院認罪"
  },
  {
    "date": "2016/8/22",
    "year": 2016,
    "month": 8,
    "day": 22,
    "area": "中南美洲",
    "place": "巴西",
    "title": "衣索比亞馬拉松選手於里約奧運冒死抗議政府暴行"
  },
  {
    "date": "2016/8/22",
    "year": 2016,
    "month": 8,
    "day": 22,
    "area": "歐洲",
    "place": "法國",
    "title": "法國華人社區上街抗議，要求當局加強維安"
  },
  {
    "date": "2016/8/22",
    "year": 2016,
    "month": 8,
    "day": 22,
    "area": "歐洲",
    "place": "奧地利",
    "title": "「歐盟」執委會主席：須滿足所有條件才會給予土國免簽"
  },
  {
    "date": "2016/8/22",
    "year": 2016,
    "month": 8,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "邁阿密海灘出現茲卡個案，美籲孕婦勿前往該地"
  },
  {
    "date": "2016/8/22",
    "year": 2016,
    "month": 8,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "「共和黨」總統候選人川普似放軟移民問題立場"
  },
  {
    "date": "2016/8/22",
    "year": 2016,
    "month": 8,
    "day": 22,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其兒童炸彈客造成至少51死69傷"
  },
  {
    "date": "2016/8/22",
    "year": 2016,
    "month": 8,
    "day": 22,
    "area": "亞洲",
    "place": "南韓",
    "title": "美韓「乙支自由衛士」聯合軍演即日起展開"
  },
  {
    "date": "2016/8/23",
    "year": 2016,
    "month": 8,
    "day": 23,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥總統法律學士論文被控涉嫌抄襲"
  },
  {
    "date": "2016/8/23",
    "year": 2016,
    "month": 8,
    "day": 23,
    "area": "歐洲",
    "place": "德國",
    "title": "防緊急狀況，德國內政部籲民眾存糧儲水"
  },
  {
    "date": "2016/8/23",
    "year": 2016,
    "month": 8,
    "day": 23,
    "area": "歐洲",
    "place": "義大利",
    "title": "德義法領袖齊聚文托泰內島，共商「歐盟」未來"
  },
  {
    "date": "2016/8/23",
    "year": 2016,
    "month": 8,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "FBI發現柯琳頓近1萬5,000封未公布電郵"
  },
  {
    "date": "2016/8/23",
    "year": 2016,
    "month": 8,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "美軍將首度在美國本土外部署新型戰機「F35B」"
  },
  {
    "date": "2016/8/23",
    "year": 2016,
    "month": 8,
    "day": 23,
    "area": "亞洲",
    "place": "日本",
    "title": "日「中」韓本週三將在東京召開外長會議"
  },
  {
    "date": "2016/8/23",
    "year": 2016,
    "month": 8,
    "day": 23,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其總理：婚禮爆炸案非兒童炸彈客所為"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "非洲",
    "place": "剛果中非共和國",
    "title": "「世衛」將召開緊急會議，商討黃熱病疫情"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "非洲",
    "place": "利比亞",
    "title": "利比亞國會對「聯合國」支持的聯合政府投下不信任票"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉官員連署罷免總統，恐遭馬杜洛報復"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "歐洲",
    "place": "法國",
    "title": "法國潛艦機密大量外洩，驚動多國"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利中部發生規模6.2強震"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬赴路州探視洪水災區"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "茲卡病毒擴散，美佛州新增5起茲卡病例"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "亞洲",
    "place": "泰國",
    "title": "泰國南部連續2起爆炸案，釀1死逾30傷"
  },
  {
    "date": "2016/8/24",
    "year": 2016,
    "month": 8,
    "day": 24,
    "area": "亞洲",
    "place": "日本",
    "title": "日韓「中」外長抗議北韓試射飛彈"
  },
  {
    "date": "2016/8/25",
    "year": 2016,
    "month": 8,
    "day": 25,
    "area": "非洲",
    "place": "辛巴威",
    "title": "辛巴威民眾抗議總統獨裁，演變成警民暴力衝突"
  },
  {
    "date": "2016/8/25",
    "year": 2016,
    "month": 8,
    "day": 25,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞政府和叛軍簽署歷史性和平協議"
  },
  {
    "date": "2016/8/25",
    "year": 2016,
    "month": 8,
    "day": 25,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利強震至少160死，搜救人員徹夜搜尋生還者"
  },
  {
    "date": "2016/8/25",
    "year": 2016,
    "month": 8,
    "day": 25,
    "area": "歐洲",
    "place": "法國",
    "title": "恐攻頻傳，巴黎觀光客銳減百萬人"
  },
  {
    "date": "2016/8/25",
    "year": 2016,
    "month": 8,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "北韓發射潛射彈道飛彈，安理會對此召開緊急會議"
  },
  {
    "date": "2016/8/25",
    "year": 2016,
    "month": 8,
    "day": 25,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大皇家騎警允許女警包頭巾"
  },
  {
    "date": "2016/8/25",
    "year": 2016,
    "month": 8,
    "day": 25,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "美土聯手助敘叛軍攻下「伊斯蘭國」根據地"
  },
  {
    "date": "2016/8/25",
    "year": 2016,
    "month": 8,
    "day": 25,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸規模6/8強震釀3死65佛塔毀損"
  },
  {
    "date": "2016/8/26",
    "year": 2016,
    "month": 8,
    "day": 26,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞近50萬名孩童嚴重營養不良"
  },
  {
    "date": "2016/8/26",
    "year": 2016,
    "month": 8,
    "day": 26,
    "area": "中南美洲",
    "place": "玻利維亞",
    "title": "玻利維亞內政部次長遭礦工殺害"
  },
  {
    "date": "2016/8/26",
    "year": 2016,
    "month": 8,
    "day": 26,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利宣布重災區進入緊急狀態"
  },
  {
    "date": "2016/8/26",
    "year": 2016,
    "month": 8,
    "day": 26,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時運動中心發生爆炸，一死四傷"
  },
  {
    "date": "2016/8/26",
    "year": 2016,
    "month": 8,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "美國防部：伊朗船艦4度在波斯灣逼近美艦"
  },
  {
    "date": "2016/8/26",
    "year": 2016,
    "month": 8,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "白宮譴責敘利亞政府使用化學武器"
  },
  {
    "date": "2016/8/26",
    "year": 2016,
    "month": 8,
    "day": 26,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "「聯合國」：敘利亞政府曾發動化武攻擊"
  },
  {
    "date": "2016/8/29",
    "year": 2016,
    "month": 8,
    "day": 29,
    "area": "非洲",
    "place": "加彭",
    "title": "加彭反對派總統候選人宣布勝選"
  },
  {
    "date": "2016/8/29",
    "year": 2016,
    "month": 8,
    "day": 29,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞左派叛軍正式宣布無限期停火"
  },
  {
    "date": "2016/8/29",
    "year": 2016,
    "month": 8,
    "day": 29,
    "area": "歐洲",
    "place": "德國",
    "title": "德國去年收容難民不及原宣稱的百萬人"
  },
  {
    "date": "2016/8/29",
    "year": 2016,
    "month": 8,
    "day": 29,
    "area": "歐洲",
    "place": "法國",
    "title": "巴黎餐廳拒絕服務穆斯林婦女"
  },
  {
    "date": "2016/8/29",
    "year": 2016,
    "month": 8,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "聯準會主席：升息機率增強"
  },
  {
    "date": "2016/8/29",
    "year": 2016,
    "month": 8,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "川普稱將開發追蹤系統，協助當局控管移民"
  },
  {
    "date": "2016/8/29",
    "year": 2016,
    "month": 8,
    "day": 29,
    "area": "亞洲",
    "place": "新加坡",
    "title": "新加坡茲卡病毒本土感染病例增至41起"
  },
  {
    "date": "2016/8/29",
    "year": 2016,
    "month": 8,
    "day": 29,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "土耳其對敘利亞進行空襲，傳造成數十名平民死亡"
  },
  {
    "date": "2016/8/30",
    "year": 2016,
    "month": 8,
    "day": 30,
    "area": "非洲",
    "place": "加彭",
    "title": "「歐盟」觀察團：加彭總統選舉「缺乏透明度」"
  },
  {
    "date": "2016/8/30",
    "year": 2016,
    "month": 8,
    "day": 30,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西總統首赴參議院為彈劾案辯護"
  },
  {
    "date": "2016/8/30",
    "year": 2016,
    "month": 8,
    "day": 30,
    "area": "歐洲",
    "place": "德國",
    "title": "德國境內近9,000名難民孩童失蹤"
  },
  {
    "date": "2016/8/30",
    "year": 2016,
    "month": 8,
    "day": 30,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利海巡隊在利比亞外海救起6,500名移民"
  },
  {
    "date": "2016/8/30",
    "year": 2016,
    "month": 8,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬9月4日將與土耳其總統舉行會談"
  },
  {
    "date": "2016/8/30",
    "year": 2016,
    "month": 8,
    "day": 30,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大總理前往中國大陸訪問"
  },
  {
    "date": "2016/8/30",
    "year": 2016,
    "month": 8,
    "day": 30,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲軍方與「阿布沙伊夫」交火，12名軍人死亡"
  },
  {
    "date": "2016/8/30",
    "year": 2016,
    "month": 8,
    "day": 30,
    "area": "亞洲",
    "place": "葉門",
    "title": "「伊斯蘭國」在葉門發動炸彈攻擊，釀至少50死"
  },
  {
    "date": "2016/8/31",
    "year": 2016,
    "month": 8,
    "day": 31,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞首都遭汽車炸彈攻擊，共5死10傷"
  },
  {
    "date": "2016/8/31",
    "year": 2016,
    "month": 8,
    "day": 31,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "掃毒疑似處決平民，墨國警察總長遭撤職"
  },
  {
    "date": "2016/8/31",
    "year": 2016,
    "month": 8,
    "day": 31,
    "area": "歐洲",
    "place": "法國",
    "title": "法經濟部長請辭，為角逐下屆總統鋪路"
  },
  {
    "date": "2016/8/31",
    "year": 2016,
    "month": 8,
    "day": 31,
    "area": "歐洲",
    "place": "法國",
    "title": "法外貿部長要求終止TTIP談判"
  },
  {
    "date": "2016/8/31",
    "year": 2016,
    "month": 8,
    "day": 31,
    "area": "北美洲",
    "place": "美國",
    "title": "美國：孕婦應避免前往新加坡"
  },
  {
    "date": "2016/8/31",
    "year": 2016,
    "month": 8,
    "day": 31,
    "area": "亞洲",
    "place": "吉爾吉斯",
    "title": "中國大陸駐吉爾吉斯大使館發生汽車爆炸案"
  },
  {
    "date": "2016/8/31",
    "year": 2016,
    "month": 8,
    "day": 31,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "「伊斯蘭國」發言人在敘利亞遭擊斃"
  },
  {
    "date": "2016/9/1",
    "year": 2016,
    "month": 9,
    "day": 1,
    "area": "非洲",
    "place": "加彭",
    "title": "加彭現任總統以些微差距連任成功"
  },
  {
    "date": "2016/9/1",
    "year": 2016,
    "month": 9,
    "day": 1,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西總統羅賽芙遭彈劾下台"
  },
  {
    "date": "2016/9/1",
    "year": 2016,
    "month": 9,
    "day": 1,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙政府持續難產，恐一年內三度舉行大選"
  },
  {
    "date": "2016/9/1",
    "year": 2016,
    "month": 9,
    "day": 1,
    "area": "歐洲",
    "place": "希臘",
    "title": "土耳其警力撤出希臘，土歐難民協議形同停擺"
  },
  {
    "date": "2016/9/1",
    "year": 2016,
    "month": 9,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "相隔逾半世紀，美國首架直航班機飛抵古巴"
  },
  {
    "date": "2016/9/1",
    "year": 2016,
    "month": 9,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "川普與墨西哥總統會面，避談邊界牆費用誰買單"
  },
  {
    "date": "2016/9/1",
    "year": 2016,
    "month": 9,
    "day": 1,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸政府與少數民族展開和平談判"
  },
  {
    "date": "2016/9/1",
    "year": 2016,
    "month": 9,
    "day": 1,
    "area": "亞洲",
    "place": "日本",
    "title": "日本防衛省提出逾5兆日圓之國防預算"
  },
  {
    "date": "2016/9/2",
    "year": 2016,
    "month": 9,
    "day": 2,
    "area": "非洲",
    "place": "加彭",
    "title": "抗議總統選舉不公，加彭首都陷入混亂"
  },
  {
    "date": "2016/9/2",
    "year": 2016,
    "month": 9,
    "day": 2,
    "area": "中南美洲",
    "place": "巴西",
    "title": "羅賽芙下台，拉美左派政府紛表不滿"
  },
  {
    "date": "2016/9/2",
    "year": 2016,
    "month": 9,
    "day": 2,
    "area": "歐洲",
    "place": "法國",
    "title": "法國學童開學日，校園維安上緊發條"
  },
  {
    "date": "2016/9/2",
    "year": 2016,
    "month": 9,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "俄羅斯造橋連結克里米亞，美國擴大制裁名單"
  },
  {
    "date": "2016/9/2",
    "year": 2016,
    "month": 9,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬亞洲行首訪中途島，盼世人重視氣候變遷議題"
  },
  {
    "date": "2016/9/2",
    "year": 2016,
    "month": 9,
    "day": 2,
    "area": "亞洲",
    "place": "土耳其",
    "title": "「歐洲議會」議長赴土耳其商討土歐難民協議"
  },
  {
    "date": "2016/9/2",
    "year": 2016,
    "month": 9,
    "day": 2,
    "area": "亞洲",
    "place": "馬來西亞",
    "title": "馬來西亞出現首起茲卡確診病例 "
  },
  {
    "date": "2016/9/2",
    "year": 2016,
    "month": 9,
    "day": 2,
    "area": "亞洲",
    "place": "日本",
    "title": "日相安倍赴俄與普亭展開會談"
  },
  {
    "date": "2016/9/5",
    "year": 2016,
    "month": 9,
    "day": 5,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞：本月底與FARC叛軍簽署和平協議"
  },
  {
    "date": "2016/9/5",
    "year": 2016,
    "month": 9,
    "day": 5,
    "area": "中南美洲",
    "place": "阿根廷",
    "title": "阿根廷數萬人上街抗議政府裁員政策"
  },
  {
    "date": "2016/9/5",
    "year": 2016,
    "month": 9,
    "day": 5,
    "area": "歐洲",
    "place": "德國",
    "title": "德執政黨地方選舉敗給極右派政黨"
  },
  {
    "date": "2016/9/5",
    "year": 2016,
    "month": 9,
    "day": 5,
    "area": "歐洲",
    "place": "梵蒂岡",
    "title": "教宗方濟各封德勒莎修女為聖人"
  },
  {
    "date": "2016/9/5",
    "year": 2016,
    "month": 9,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬與土國總統會面，盼修補兩國關係"
  },
  {
    "date": "2016/9/5",
    "year": 2016,
    "month": 9,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "美國奧克拉荷馬州發生規模5.6地震"
  },
  {
    "date": "2016/9/5",
    "year": 2016,
    "month": 9,
    "day": 5,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲總統家鄉遭恐攻，宣布國家進入「無法律狀態」"
  },
  {
    "date": "2016/9/5",
    "year": 2016,
    "month": 9,
    "day": 5,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其：已將「伊斯蘭國」逐出土敘邊界"
  },
  {
    "date": "2016/9/6",
    "year": 2016,
    "month": 9,
    "day": 6,
    "area": "歐洲",
    "place": "德國",
    "title": "地方選舉敗給反移民政黨，梅克爾難民政策受質疑"
  },
  {
    "date": "2016/9/6",
    "year": 2016,
    "month": 9,
    "day": 6,
    "area": "歐洲",
    "place": "法國",
    "title": "法國加萊民眾要求全面拆除「叢林」難民營"
  },
  {
    "date": "2016/9/6",
    "year": 2016,
    "month": 9,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬抵達寮國進行歷史性訪問"
  },
  {
    "date": "2016/9/6",
    "year": 2016,
    "month": 9,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "白宮取消歐巴馬與菲律賓總統的會面"
  },
  {
    "date": "2016/9/6",
    "year": 2016,
    "month": 9,
    "day": 6,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓朝日本海發射3枚彈道飛彈"
  },
  {
    "date": "2016/9/6",
    "year": 2016,
    "month": 9,
    "day": 6,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞傳連環爆炸案，釀至少40死"
  },
  {
    "date": "2016/9/6",
    "year": 2016,
    "month": 9,
    "day": 6,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港「非建制派」奪下立法會35直選席次中19席"
  },
  {
    "date": "2016/9/6",
    "year": 2016,
    "month": 9,
    "day": 6,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "G20杭州峰會落幕，各國矢言解決鋼鐵產能過剩問題"
  },
  {
    "date": "2016/9/7",
    "year": 2016,
    "month": 9,
    "day": 7,
    "area": "非洲",
    "place": "加彭",
    "title": "抗議總統選舉不公，加彭司法部長宣布辭職"
  },
  {
    "date": "2016/9/7",
    "year": 2016,
    "month": 9,
    "day": 7,
    "area": "歐洲",
    "place": "法國",
    "title": "巴黎10月中將開設首座難民營"
  },
  {
    "date": "2016/9/7",
    "year": 2016,
    "month": 9,
    "day": 7,
    "area": "歐洲",
    "place": "英國",
    "title": "英國伊斯蘭教士煽動他人加入ISIS遭判刑5年半"
  },
  {
    "date": "2016/9/7",
    "year": 2016,
    "month": 9,
    "day": 7,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬承諾撥款9,000萬美元協助寮國清除未爆彈"
  },
  {
    "date": "2016/9/7",
    "year": 2016,
    "month": 9,
    "day": 7,
    "area": "北美洲",
    "place": "美國",
    "title": "美韓領袖峰會，歐巴馬承諾對北韓加強制裁"
  },
  {
    "date": "2016/9/7",
    "year": 2016,
    "month": 9,
    "day": 7,
    "area": "亞洲",
    "place": "寮國",
    "title": "日菲首次領袖會談，同意就南海問題加強合作"
  },
  {
    "date": "2016/9/7",
    "year": 2016,
    "month": 9,
    "day": 7,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "阿富汗首都發生3起爆炸案，釀至少41死"
  },
  {
    "date": "2016/9/7",
    "year": 2016,
    "month": 9,
    "day": 7,
    "area": "兩岸三地",
    "place": "臺灣",
    "title": "美婦女議題大使赴台推動雙邊合作"
  },
  {
    "date": "2016/9/8",
    "year": 2016,
    "month": 9,
    "day": 8,
    "area": "非洲",
    "place": "辛巴威",
    "title": "杜絕盜獵行徑，辛巴威先行為犀牛割角"
  },
  {
    "date": "2016/9/8",
    "year": 2016,
    "month": 9,
    "day": 8,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西左派發動反新政府示威遊行"
  },
  {
    "date": "2016/9/8",
    "year": 2016,
    "month": 9,
    "day": 8,
    "area": "歐洲",
    "place": "法國",
    "title": "英國將出資在法國加萊蓋4尺高牆擋移民"
  },
  {
    "date": "2016/9/8",
    "year": 2016,
    "month": 9,
    "day": 8,
    "area": "歐洲",
    "place": "丹麥",
    "title": "查國民逃漏稅，丹麥政府將斥資百萬買巴拿馬文件"
  },
  {
    "date": "2016/9/8",
    "year": 2016,
    "month": 9,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "川普：若當選，將大幅擴編美軍經費"
  },
  {
    "date": "2016/9/8",
    "year": 2016,
    "month": 9,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬與杜特蒂在「東協」峰會晚宴短暫互動"
  },
  {
    "date": "2016/9/8",
    "year": 2016,
    "month": 9,
    "day": 8,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲總理呼籲正視恐攻威脅"
  },
  {
    "date": "2016/9/8",
    "year": 2016,
    "month": 9,
    "day": 8,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞反對派提出政治過渡計畫"
  },
  {
    "date": "2016/9/9",
    "year": 2016,
    "month": 9,
    "day": 9,
    "area": "非洲",
    "place": "加彭",
    "title": "質疑總統選舉不公，加彭反對派提告憲法法庭"
  },
  {
    "date": "2016/9/9",
    "year": 2016,
    "month": 9,
    "day": 9,
    "area": "歐洲",
    "place": "法國",
    "title": "法國山區纜車故障，45人受困白朗峰"
  },
  {
    "date": "2016/9/9",
    "year": 2016,
    "month": 9,
    "day": 9,
    "area": "歐洲",
    "place": "挪威",
    "title": "挪威暫停北極石油開採計畫"
  },
  {
    "date": "2016/9/9",
    "year": 2016,
    "month": 9,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "白宮任命空軍退役准將出任美國首位聯邦資安長"
  },
  {
    "date": "2016/9/9",
    "year": 2016,
    "month": 9,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "美國當局呼籲搭機旅客勿在機上使用三星Note 7手機"
  },
  {
    "date": "2016/9/9",
    "year": 2016,
    "month": 9,
    "day": 9,
    "area": "亞洲",
    "place": "烏茲別克",
    "title": "烏茲別克國會指派總理出任臨時總統"
  },
  {
    "date": "2016/9/9",
    "year": 2016,
    "month": 9,
    "day": 9,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "「塔利班」攻進阿富汗南部省份"
  },
  {
    "date": "2016/9/9",
    "year": 2016,
    "month": 9,
    "day": 9,
    "area": "亞洲",
    "place": "寮國",
    "title": "「東協」及美日「中」領導人召開東亞峰會"
  },
  {
    "date": "2016/9/10",
    "year": 2016,
    "month": 9,
    "day": 10,
    "area": "非洲",
    "place": "貝南",
    "title": "非洲貝南垃圾場傳爆炸，至少2死61傷"
  },
  {
    "date": "2016/9/10",
    "year": 2016,
    "month": 9,
    "day": 10,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙火車出軌意外，至少4人死亡"
  },
  {
    "date": "2016/9/10",
    "year": 2016,
    "month": 9,
    "day": 10,
    "area": "歐洲",
    "place": "法國",
    "title": "巴黎3女疑策畫恐怖攻擊，遭警方逮捕"
  },
  {
    "date": "2016/9/10",
    "year": 2016,
    "month": 9,
    "day": 10,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓進行今年第2次核試"
  },
  {
    "date": "2016/9/10",
    "year": 2016,
    "month": 9,
    "day": 10,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "美俄就敘利亞問題達成協議"
  },
  {
    "date": "2016/9/12",
    "year": 2016,
    "month": 9,
    "day": 12,
    "area": "非洲",
    "place": "肯亞",
    "title": "3名女子試圖對肯亞警察局發動攻擊"
  },
  {
    "date": "2016/9/12",
    "year": 2016,
    "month": 9,
    "day": 12,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞反叛團體釋放首批兒童兵"
  },
  {
    "date": "2016/9/12",
    "year": 2016,
    "month": 9,
    "day": 12,
    "area": "歐洲",
    "place": "法國",
    "title": "策畫恐怖攻擊，15歲少年在巴黎落網"
  },
  {
    "date": "2016/9/12",
    "year": 2016,
    "month": 9,
    "day": 12,
    "area": "歐洲",
    "place": "西班牙",
    "title": "數千人在馬德里參與反鬥牛遊行"
  },
  {
    "date": "2016/9/12",
    "year": 2016,
    "month": 9,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬紀念911：「美國人絕不屈服於恐懼」"
  },
  {
    "date": "2016/9/12",
    "year": 2016,
    "month": 9,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓911紀念活動暈眩離場"
  },
  {
    "date": "2016/9/13",
    "year": 2016,
    "month": 9,
    "day": 13,
    "area": "非洲",
    "place": "坦尚尼亞",
    "title": "坦尚尼亞強震釀至少16死"
  },
  {
    "date": "2016/9/13",
    "year": 2016,
    "month": 9,
    "day": 13,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥同性婚姻支持人士上街遊行"
  },
  {
    "date": "2016/9/13",
    "year": 2016,
    "month": 9,
    "day": 13,
    "area": "歐洲",
    "place": "克羅埃西亞",
    "title": "克羅埃西亞保守派勝選，可望組織聯合政府"
  },
  {
    "date": "2016/9/13",
    "year": 2016,
    "month": 9,
    "day": 13,
    "area": "歐洲",
    "place": "西班牙",
    "title": "數十萬加泰隆尼亞民眾上街爭取「脫西」"
  },
  {
    "date": "2016/9/13",
    "year": 2016,
    "month": 9,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓健康狀況引疑慮，將公布健康報告釋疑"
  },
  {
    "date": "2016/9/13",
    "year": 2016,
    "month": 9,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "美國佛羅里達清真寺遭人縱火"
  },
  {
    "date": "2016/9/13",
    "year": 2016,
    "month": 9,
    "day": 13,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓隨時將再次核試，美軍派轟炸機示威"
  },
  {
    "date": "2016/9/13",
    "year": 2016,
    "month": 9,
    "day": 13,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞停火協議正式生效"
  },
  {
    "date": "2016/9/14",
    "year": 2016,
    "month": 9,
    "day": 14,
    "area": "非洲",
    "place": "南非",
    "title": "南非禁止美國反同牧師入境"
  },
  {
    "date": "2016/9/14",
    "year": 2016,
    "month": 9,
    "day": 14,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西眾議院前議長遭革職"
  },
  {
    "date": "2016/9/14",
    "year": 2016,
    "month": 9,
    "day": 14,
    "area": "歐洲",
    "place": "盧森堡",
    "title": "不滿匈牙利難民政策，盧森堡外長籲逐出「歐盟」"
  },
  {
    "date": "2016/9/14",
    "year": 2016,
    "month": 9,
    "day": 14,
    "area": "歐洲",
    "place": "德國",
    "title": "疑似接觸「伊斯蘭國」，3難民在德國遭逮"
  },
  {
    "date": "2016/9/14",
    "year": 2016,
    "month": 9,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓靜養期間，歐巴馬代打助選"
  },
  {
    "date": "2016/9/14",
    "year": 2016,
    "month": 9,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "美俄外長協議聯手空襲「伊斯蘭國」，美國防部不以為然"
  },
  {
    "date": "2016/9/14",
    "year": 2016,
    "month": 9,
    "day": 14,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓東北地區洪災，十萬人無家可歸"
  },
  {
    "date": "2016/9/14",
    "year": 2016,
    "month": 9,
    "day": 14,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲政府計畫於明年2月舉行同性婚姻公投"
  },
  {
    "date": "2016/9/19",
    "year": 2016,
    "month": 9,
    "day": 19,
    "area": "非洲",
    "place": "中非共和國",
    "title": "中非叛軍組織被控屠殺26人"
  },
  {
    "date": "2016/9/19",
    "year": 2016,
    "month": 9,
    "day": 19,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "「聯合國難民署」：來自南蘇丹的難民破百萬人"
  },
  {
    "date": "2016/9/19",
    "year": 2016,
    "month": 9,
    "day": 19,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄國下議院大選出口民調：執政黨拿下近5成政黨票"
  },
  {
    "date": "2016/9/19",
    "year": 2016,
    "month": 9,
    "day": 19,
    "area": "歐洲",
    "place": "比利時",
    "title": "「歐洲理事會」主席：英國擬明年初啟動「脫歐」程序"
  },
  {
    "date": "2016/9/19",
    "year": 2016,
    "month": 9,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "美國紐約發生爆炸事件，29人受傷"
  },
  {
    "date": "2016/9/19",
    "year": 2016,
    "month": 9,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "美國明尼蘇達發生持刀砍人事件，調查局不排除為恐攻"
  },
  {
    "date": "2016/9/19",
    "year": 2016,
    "month": 9,
    "day": 19,
    "area": "亞洲",
    "place": "美國",
    "title": "泰國湄南河發生船難，多人死傷"
  },
  {
    "date": "2016/9/19",
    "year": 2016,
    "month": 9,
    "day": 19,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "美軍誤擊敘利亞政府軍，停火協議瀕臨破局"
  },
  {
    "date": "2016/9/20",
    "year": 2016,
    "month": 9,
    "day": 20,
    "area": "非洲",
    "place": "剛果中非共和國",
    "title": "剛果民主共和國爆發警民衝突，釀至少17死"
  },
  {
    "date": "2016/9/20",
    "year": 2016,
    "month": 9,
    "day": 20,
    "area": "歐洲",
    "place": "德國",
    "title": "德國柏林邦議會選舉：反移民政黨再下一城"
  },
  {
    "date": "2016/9/20",
    "year": 2016,
    "month": 9,
    "day": 20,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄國下院選舉結果出爐，執政黨囊括過半席次"
  },
  {
    "date": "2016/9/20",
    "year": 2016,
    "month": 9,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "第71屆聯合國大會於紐約揭開序幕"
  },
  {
    "date": "2016/9/20",
    "year": 2016,
    "month": 9,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "紐約爆炸案嫌犯與警方交火後落網"
  },
  {
    "date": "2016/9/20",
    "year": 2016,
    "month": 9,
    "day": 20,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞停火協議結束，「聯合國」救援車隊遭空襲"
  },
  {
    "date": "2016/9/20",
    "year": 2016,
    "month": 9,
    "day": 20,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓：火箭發動機測試成功"
  },
  {
    "date": "2016/9/20",
    "year": 2016,
    "month": 9,
    "day": 20,
    "area": "亞洲",
    "place": "日本",
    "title": "日本將提供28億美元援助難民及移民"
  },
  {
    "date": "2016/9/21",
    "year": 2016,
    "month": 9,
    "day": 21,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞逾500萬人面臨缺糧問題"
  },
  {
    "date": "2016/9/21",
    "year": 2016,
    "month": 9,
    "day": 21,
    "area": "歐洲",
    "place": "希臘",
    "title": "希臘難民營發生大火，約5,000移民被迫撤離"
  },
  {
    "date": "2016/9/21",
    "year": 2016,
    "month": 9,
    "day": 21,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時近萬人上街抗議「跨大西洋貿易及投資夥伴協定」"
  },
  {
    "date": "2016/9/21",
    "year": 2016,
    "month": 9,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬：50國承諾接收36萬名難民"
  },
  {
    "date": "2016/9/21",
    "year": 2016,
    "month": 9,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "聯合國救援車隊遭空襲，美國：俄羅斯應負責"
  },
  {
    "date": "2016/9/21",
    "year": 2016,
    "month": 9,
    "day": 21,
    "area": "亞洲",
    "place": "日本",
    "title": "日銀維持利率不變，改設長期利率目標"
  },
  {
    "date": "2016/9/22",
    "year": 2016,
    "month": 9,
    "day": 22,
    "area": "非洲",
    "place": "埃及",
    "title": "移民船在埃及外海翻覆，釀至少42死"
  },
  {
    "date": "2016/9/22",
    "year": 2016,
    "month": 9,
    "day": 22,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "衣索比亞將打造工業園區，以提供難民工作機會"
  },
  {
    "date": "2016/9/22",
    "year": 2016,
    "month": 9,
    "day": 22,
    "area": "歐洲",
    "place": "法國",
    "title": "堵移民偷渡赴英，法國加萊築牆防範"
  },
  {
    "date": "2016/9/22",
    "year": 2016,
    "month": 9,
    "day": 22,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄國唯一航空母艦擬進駐地中海"
  },
  {
    "date": "2016/9/22",
    "year": 2016,
    "month": 9,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "川普揚言退出巴黎氣候協定，遭近400名科學家聯名抨擊"
  },
  {
    "date": "2016/9/22",
    "year": 2016,
    "month": 9,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "「富國銀行」涉盜開帳戶，美參議員要求執行長下台"
  },
  {
    "date": "2016/9/22",
    "year": 2016,
    "month": 9,
    "day": 22,
    "area": "亞洲",
    "place": "南韓",
    "title": "向北韓示威，美國2架轟炸機再度飛越南韓"
  },
  {
    "date": "2016/9/22",
    "year": 2016,
    "month": 9,
    "day": 22,
    "area": "亞洲",
    "place": "印度",
    "title": "喀什米爾地區爆衝突，印巴關係陷入高度緊張"
  },
  {
    "date": "2016/9/23",
    "year": 2016,
    "month": 9,
    "day": 23,
    "area": "歐洲",
    "place": "法國",
    "title": "爭取明年總統大位，法國「共和黨」提名初選開跑"
  },
  {
    "date": "2016/9/23",
    "year": 2016,
    "month": 9,
    "day": 23,
    "area": "歐洲",
    "place": "比利時",
    "title": "友台歐洲議員支持台灣參與ICAO大會"
  },
  {
    "date": "2016/9/23",
    "year": 2016,
    "month": 9,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "「雅虎」證實5億用戶資料遭駭"
  },
  {
    "date": "2016/9/23",
    "year": 2016,
    "month": 9,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "美警槍殺手無寸鐵非裔牧師"
  },
  {
    "date": "2016/9/23",
    "year": 2016,
    "month": 9,
    "day": 23,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓：是時候重新考慮北韓的「聯合國」會籍"
  },
  {
    "date": "2016/9/23",
    "year": 2016,
    "month": 9,
    "day": 23,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓總統計畫10月訪問日「中」"
  },
  {
    "date": "2016/9/26",
    "year": 2016,
    "month": 9,
    "day": 26,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥民眾上街抗議，反對同性婚姻合法化"
  },
  {
    "date": "2016/9/26",
    "year": 2016,
    "month": 9,
    "day": 26,
    "area": "歐洲",
    "place": "奧地利",
    "title": "歐洲領袖召開峰會，討論難民問題"
  },
  {
    "date": "2016/9/26",
    "year": 2016,
    "month": 9,
    "day": 26,
    "area": "歐洲",
    "place": "匈牙利",
    "title": "布達佩斯市中心發生炸彈爆炸，2名員警受傷"
  },
  {
    "date": "2016/9/26",
    "year": 2016,
    "month": 9,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬否決911罹難者家屬可告沙國法案"
  },
  {
    "date": "2016/9/26",
    "year": 2016,
    "month": 9,
    "day": 26,
    "area": "亞洲",
    "place": "約旦",
    "title": "約旦知名作家疑因冒犯伊斯蘭遭槍殺"
  },
  {
    "date": "2016/9/26",
    "year": 2016,
    "month": 9,
    "day": 26,
    "area": "亞洲",
    "place": "印度",
    "title": "印度將批准巴黎氣候協定"
  },
  {
    "date": "2016/9/29",
    "year": 2016,
    "month": 9,
    "day": 29,
    "area": "非洲",
    "place": "阿爾及利亞",
    "title": "OPEC八年來首次同意減產，油價聞訊大漲5%"
  },
  {
    "date": "2016/9/29",
    "year": 2016,
    "month": 9,
    "day": 29,
    "area": "非洲",
    "place": "蘇丹",
    "title": "國際特赦組織指控蘇丹政府動用化武"
  },
  {
    "date": "2016/9/29",
    "year": 2016,
    "month": 9,
    "day": 29,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "馬航MH17客機遭擊落，飛彈疑來自俄國"
  },
  {
    "date": "2016/9/29",
    "year": 2016,
    "month": 9,
    "day": 29,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙「社會勞工黨」17名高層提出辭呈"
  },
  {
    "date": "2016/9/29",
    "year": 2016,
    "month": 9,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "美防長：加派600名美軍赴伊拉克協助訓練"
  },
  {
    "date": "2016/9/29",
    "year": 2016,
    "month": 9,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "美國參議院推翻歐巴馬否決JASTA法案之決定"
  },
  {
    "date": "2016/9/29",
    "year": 2016,
    "month": 9,
    "day": 29,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "美軍空襲阿富汗，傳造成無辜平民傷亡"
  },
  {
    "date": "2016/9/29",
    "year": 2016,
    "month": 9,
    "day": 29,
    "area": "亞洲",
    "place": "以色列",
    "title": "以色列前總統暨諾貝爾和平獎得主裴瑞斯辭世"
  },
  {
    "date": "2016/9/30",
    "year": 2016,
    "month": 9,
    "day": 30,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞：美軍空襲誤殺平民"
  },
  {
    "date": "2016/9/30",
    "year": 2016,
    "month": 9,
    "day": 30,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞第二大叛軍ELN：準備好與政府展開和平談判"
  },
  {
    "date": "2016/9/30",
    "year": 2016,
    "month": 9,
    "day": 30,
    "area": "歐洲",
    "place": "德國",
    "title": "歐盟執委會稱德國道路收費系統歧視外國駕駛"
  },
  {
    "date": "2016/9/30",
    "year": 2016,
    "month": 9,
    "day": 30,
    "area": "歐洲",
    "place": "德國",
    "title": "大型避險基金傳撤資，德銀股價重挫"
  },
  {
    "date": "2016/9/30",
    "year": 2016,
    "month": 9,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "避免政府無法運作，美國會通過臨時開支法案"
  },
  {
    "date": "2016/9/30",
    "year": 2016,
    "month": 9,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "五角大廈：過去1月空襲殲滅18名IS高層"
  },
  {
    "date": "2016/9/30",
    "year": 2016,
    "month": 9,
    "day": 30,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲總統杜特蒂：美菲10月聯合軍演是「最後一次」"
  },
  {
    "date": "2016/9/30",
    "year": 2016,
    "month": 9,
    "day": 30,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "喀什米爾邊境再爆衝突，印度與巴基斯坦各執一詞"
  },
  {
    "date": "2016/10/3",
    "year": 2016,
    "month": 10,
    "day": 3,
    "area": "非洲",
    "place": "衣索匹亞",
    "title": "衣索比亞反政府示威釀成踩踏事件，多人死傷"
  },
  {
    "date": "2016/10/3",
    "year": 2016,
    "month": 10,
    "day": 3,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞公投否決與FARC叛軍的和平協議"
  },
  {
    "date": "2016/10/3",
    "year": 2016,
    "month": 10,
    "day": 3,
    "area": "歐洲",
    "place": "英國",
    "title": "英相梅伊：明年3月前展開脫歐談判程序"
  },
  {
    "date": "2016/10/3",
    "year": 2016,
    "month": 10,
    "day": 3,
    "area": "歐洲",
    "place": "匈牙利",
    "title": "匈牙利就「歐盟」難民配額計畫展開公投"
  },
  {
    "date": "2016/10/3",
    "year": 2016,
    "month": 10,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "美國退出網路監管，網路進入全球共治時代"
  },
  {
    "date": "2016/10/3",
    "year": 2016,
    "month": 10,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "美防長重申：新政府續推「亞洲再平衡」政策"
  },
  {
    "date": "2016/10/3",
    "year": 2016,
    "month": 10,
    "day": 3,
    "area": "亞洲",
    "place": "泰國",
    "title": "泰國政府展現打貪決心，將設立反貪法院"
  },
  {
    "date": "2016/10/3",
    "year": 2016,
    "month": 10,
    "day": 3,
    "area": "亞洲",
    "place": "印度",
    "title": "印度批准巴黎氣候協定"
  },
  {
    "date": "2016/10/4",
    "year": 2016,
    "month": 10,
    "day": 4,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞總統：不會放棄，將繼續推動和平"
  },
  {
    "date": "2016/10/4",
    "year": 2016,
    "month": 10,
    "day": 4,
    "area": "中南美洲",
    "place": "海地",
    "title": "強大颶風「馬修」逼近海地"
  },
  {
    "date": "2016/10/4",
    "year": 2016,
    "month": 10,
    "day": 4,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯中止美俄銷毀鈽協議"
  },
  {
    "date": "2016/10/4",
    "year": 2016,
    "month": 10,
    "day": 4,
    "area": "歐洲",
    "place": "愛沙尼亞",
    "title": "愛沙尼亞選出首位女性總統"
  },
  {
    "date": "2016/10/4",
    "year": 2016,
    "month": 10,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "美國：不再與俄國就敘利亞停火事宜進行磋商"
  },
  {
    "date": "2016/10/4",
    "year": 2016,
    "month": 10,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "美國籲哥倫比亞政府與叛軍保持對話"
  },
  {
    "date": "2016/10/4",
    "year": 2016,
    "month": 10,
    "day": 4,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "塔利班攻擊阿富汗東北大城昆都茲"
  },
  {
    "date": "2016/10/4",
    "year": 2016,
    "month": 10,
    "day": 4,
    "area": "亞洲",
    "place": "日本",
    "title": "日本細胞自噬專家大隅良典獨得諾貝爾醫學獎"
  },
  {
    "date": "2016/10/5",
    "year": 2016,
    "month": 10,
    "day": 5,
    "area": "非洲",
    "place": "剛果",
    "title": "剛果下通牒，要求750名南蘇丹士兵一週內離開"
  },
  {
    "date": "2016/10/5",
    "year": 2016,
    "month": 10,
    "day": 5,
    "area": "中南美洲",
    "place": "海地",
    "title": "颶風「馬修」襲海地，狂風暴雨釀災情"
  },
  {
    "date": "2016/10/5",
    "year": 2016,
    "month": 10,
    "day": 5,
    "area": "歐洲",
    "place": "法國",
    "title": "歐洲議會批准巴黎氣候協定"
  },
  {
    "date": "2016/10/5",
    "year": 2016,
    "month": 10,
    "day": 5,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯運送飛彈系統至敘利亞"
  },
  {
    "date": "2016/10/5",
    "year": 2016,
    "month": 10,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "美海軍軍令部長：維護南海「航行自由」立場不變"
  },
  {
    "date": "2016/10/5",
    "year": 2016,
    "month": 10,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "提高企業所有權透明度，G20財金首長將討論資訊共享"
  },
  {
    "date": "2016/10/5",
    "year": 2016,
    "month": 10,
    "day": 5,
    "area": "亞洲",
    "place": "印度",
    "title": "印尼空軍將於南海舉行歷來最大規模軍演"
  },
  {
    "date": "2016/10/5",
    "year": 2016,
    "month": 10,
    "day": 5,
    "area": "亞洲",
    "place": "沙烏地阿拉伯",
    "title": "沙烏地阿拉伯在波灣舉行實彈演習"
  },
  {
    "date": "2016/10/6",
    "year": 2016,
    "month": 10,
    "day": 6,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "美公民在衣索比亞遭攻擊，傷重不治"
  },
  {
    "date": "2016/10/6",
    "year": 2016,
    "month": 10,
    "day": 6,
    "area": "中南美洲",
    "place": "海地",
    "title": "颶風馬修重創海地，總統大選被迫再次延後"
  },
  {
    "date": "2016/10/6",
    "year": 2016,
    "month": 10,
    "day": 6,
    "area": "歐洲",
    "place": "比利時",
    "title": "布魯塞爾2名警察遭人持刀攻擊"
  },
  {
    "date": "2016/10/6",
    "year": 2016,
    "month": 10,
    "day": 6,
    "area": "歐洲",
    "place": "英國",
    "title": "英相梅伊矢言打造更公平的社會"
  },
  {
    "date": "2016/10/6",
    "year": 2016,
    "month": 10,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "「巴黎氣候協定」跨過門檻，將於30天內生效"
  },
  {
    "date": "2016/10/6",
    "year": 2016,
    "month": 10,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "美陸軍參謀長：美軍有能力擊垮所有潛在對手"
  },
  {
    "date": "2016/10/6",
    "year": 2016,
    "month": 10,
    "day": 6,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "阿富汗獲國際援助152億美元"
  },
  {
    "date": "2016/10/6",
    "year": 2016,
    "month": 10,
    "day": 6,
    "area": "亞洲",
    "place": "印度",
    "title": "涉嫌詐騙美國民眾，印度警方逮捕750名嫌犯"
  },
  {
    "date": "2016/10/7",
    "year": 2016,
    "month": 10,
    "day": 7,
    "area": "中南美洲",
    "place": "海地",
    "title": "颶風「馬修」重創海地，死亡人數增至264人"
  },
  {
    "date": "2016/10/7",
    "year": 2016,
    "month": 10,
    "day": 7,
    "area": "歐洲",
    "place": "德國",
    "title": "「德銀」將再裁千名德國員工"
  },
  {
    "date": "2016/10/7",
    "year": 2016,
    "month": 10,
    "day": 7,
    "area": "歐洲",
    "place": "波蘭",
    "title": "波蘭禁墮胎法案遭國會否決"
  },
  {
    "date": "2016/10/7",
    "year": 2016,
    "month": 10,
    "day": 7,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大國會批准「巴黎氣候協定」"
  },
  {
    "date": "2016/10/7",
    "year": 2016,
    "month": 10,
    "day": 7,
    "area": "亞洲",
    "place": "以色列",
    "title": "以色列將於巴勒斯坦增闢屯墾區，美國強烈譴責"
  },
  {
    "date": "2016/10/7",
    "year": 2016,
    "month": 10,
    "day": 7,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦修補法律漏洞，「榮譽殺人」將處無期徒刑"
  },
  {
    "date": "2016/10/11",
    "year": 2016,
    "month": 10,
    "day": 11,
    "area": "非洲",
    "place": "蒲隆地",
    "title": "「聯合國」報告指控蒲隆地政府嚴重侵犯人權"
  },
  {
    "date": "2016/10/11",
    "year": 2016,
    "month": 10,
    "day": 11,
    "area": "中南美洲",
    "place": "海地",
    "title": "颶風馬修重創海地，官員憂心爆發飢荒與霍亂"
  },
  {
    "date": "2016/10/11",
    "year": 2016,
    "month": 10,
    "day": 11,
    "area": "歐洲",
    "place": "法國",
    "title": "不滿俄羅斯否決提案，法總統暗示俄有可能面臨戰爭罪"
  },
  {
    "date": "2016/10/11",
    "year": 2016,
    "month": 10,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "美眾議院議長萊恩表示不再為川普辯護"
  },
  {
    "date": "2016/10/11",
    "year": 2016,
    "month": 10,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "美國展開第二輪總統候選人電視辯論"
  },
  {
    "date": "2016/10/11",
    "year": 2016,
    "month": 10,
    "day": 11,
    "area": "亞洲",
    "place": "新加坡",
    "title": "涉「一馬」弊案，新加坡再關閉1家瑞士銀行"
  },
  {
    "date": "2016/10/11",
    "year": 2016,
    "month": 10,
    "day": 11,
    "area": "亞洲",
    "place": "新加坡",
    "title": "「世衛組織」：「茲卡」有席捲亞洲之虞"
  },
  {
    "date": "2016/10/12",
    "year": 2016,
    "month": 10,
    "day": 12,
    "area": "非洲",
    "place": "剛果民主共和國",
    "title": "聯合國：剛果政治危機擴大，恐引發「大規模」暴動"
  },
  {
    "date": "2016/10/12",
    "year": 2016,
    "month": 10,
    "day": 12,
    "area": "中南美洲",
    "place": "巴西",
    "title": "治安每況愈下，巴西里約公安廳長請辭下台"
  },
  {
    "date": "2016/10/12",
    "year": 2016,
    "month": 10,
    "day": 12,
    "area": "歐洲",
    "place": "法國",
    "title": "法俄因敘利亞問題生齟齬，俄羅斯總統取消訪法"
  },
  {
    "date": "2016/10/12",
    "year": 2016,
    "month": 10,
    "day": 12,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利奧委會正式退出申辦2024年奧運"
  },
  {
    "date": "2016/10/12",
    "year": 2016,
    "month": 10,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬呼籲「共和黨」停止支持川普選總統"
  },
  {
    "date": "2016/10/12",
    "year": 2016,
    "month": 10,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "颶風馬修造成美國北卡州洪水氾濫"
  },
  {
    "date": "2016/10/12",
    "year": 2016,
    "month": 10,
    "day": 12,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "喀布爾什葉派聖地遭槍手攻擊，釀14死數十傷"
  },
  {
    "date": "2016/10/12",
    "year": 2016,
    "month": 10,
    "day": 12,
    "area": "亞洲",
    "place": "韓國",
    "title": "敦促北韓人民脫北，南韓總統促當局做好準備"
  },
  {
    "date": "2016/10/13",
    "year": 2016,
    "month": 10,
    "day": 13,
    "area": "非洲",
    "place": "蒲隆地",
    "title": "蒲隆地國會投票通過退出國際刑事法院"
  },
  {
    "date": "2016/10/13",
    "year": 2016,
    "month": 10,
    "day": 13,
    "area": "歐洲",
    "place": "委內瑞拉",
    "title": "德國恐攻嫌犯落網後在獄中輕生"
  },
  {
    "date": "2016/10/13",
    "year": 2016,
    "month": 10,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "美國國務卿凱瑞將與俄羅斯等國談判敘利亞問題"
  },
  {
    "date": "2016/10/13",
    "year": 2016,
    "month": 10,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "美國防部：「伊斯蘭國」以無人機發動攻擊"
  },
  {
    "date": "2016/10/13",
    "year": 2016,
    "month": 10,
    "day": 13,
    "area": "亞洲",
    "place": "印尼",
    "title": "推動法律改革，印尼矢言打擊走私及索賄公務員"
  },
  {
    "date": "2016/10/13",
    "year": 2016,
    "month": 10,
    "day": 13,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲政府邀「聯合國」派員調查「法外制裁」"
  },
  {
    "date": "2016/10/14",
    "year": 2016,
    "month": 10,
    "day": 14,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "博科聖地釋放21名兩年前遭綁女學生"
  },
  {
    "date": "2016/10/14",
    "year": 2016,
    "month": 10,
    "day": 14,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞民眾上街要求恢復和平協議"
  },
  {
    "date": "2016/10/14",
    "year": 2016,
    "month": 10,
    "day": 14,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐洲理事會主席：英國只能選「硬脫歐」或「不脫歐」"
  },
  {
    "date": "2016/10/14",
    "year": 2016,
    "month": 10,
    "day": 14,
    "area": "歐洲",
    "place": "德國",
    "title": "德國憲法法院支持歐加自由貿易協定"
  },
  {
    "date": "2016/10/14",
    "year": 2016,
    "month": 10,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "美國歌手巴布狄倫獲頒諾貝爾文學獎"
  },
  {
    "date": "2016/10/14",
    "year": 2016,
    "month": 10,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "聯合國正式任命古特瑞斯擔任秘書長"
  },
  {
    "date": "2016/10/14",
    "year": 2016,
    "month": 10,
    "day": 14,
    "area": "亞洲",
    "place": "泰國",
    "title": "泰王蒲美蓬駕崩，全國舉哀1年"
  },
  {
    "date": "2016/10/14",
    "year": 2016,
    "month": 10,
    "day": 14,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港立法會3議員宣誓遭判定無效"
  },
  {
    "date": "2016/10/17",
    "year": 2016,
    "month": 10,
    "day": 17,
    "area": "非洲",
    "place": "尼日",
    "title": "美國志工於尼日住家遭綁"
  },
  {
    "date": "2016/10/17",
    "year": 2016,
    "month": 10,
    "day": 17,
    "area": "中南美洲",
    "place": "海地",
    "title": "潘基文赴海地查看災情"
  },
  {
    "date": "2016/10/17",
    "year": 2016,
    "month": 10,
    "day": 17,
    "area": "歐洲",
    "place": "蒙特內哥羅",
    "title": "蒙特內哥羅大選，執政黨料將獲勝"
  },
  {
    "date": "2016/10/17",
    "year": 2016,
    "month": 10,
    "day": 17,
    "area": "歐洲",
    "place": "英國",
    "title": "英國國會要求對梅伊的脫歐策略進行投票"
  },
  {
    "date": "2016/10/17",
    "year": 2016,
    "month": 10,
    "day": 17,
    "area": "北美洲",
    "place": "美國",
    "title": "美國強烈譴責北韓試射飛彈"
  },
  {
    "date": "2016/10/17",
    "year": 2016,
    "month": 10,
    "day": 17,
    "area": "北美洲",
    "place": "美國",
    "title": "北卡州共和黨辦公室遭縱火"
  },
  {
    "date": "2016/10/17",
    "year": 2016,
    "month": 10,
    "day": 17,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓試射中程飛彈以失敗收場"
  },
  {
    "date": "2016/10/17",
    "year": 2016,
    "month": 10,
    "day": 17,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克準備展開摩蘇爾收復戰"
  },
  {
    "date": "2016/10/18",
    "year": 2016,
    "month": 10,
    "day": 18,
    "area": "非洲",
    "place": "盧安達",
    "title": "流亡50餘年，盧安達末代國王於華府辭世"
  },
  {
    "date": "2016/10/18",
    "year": 2016,
    "month": 10,
    "day": 18,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞第二大叛軍：不會倉促簽定和平協議"
  },
  {
    "date": "2016/10/18",
    "year": 2016,
    "month": 10,
    "day": 18,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利政府決定拆除希特勒出生公寓"
  },
  {
    "date": "2016/10/18",
    "year": 2016,
    "month": 10,
    "day": 18,
    "area": "歐洲",
    "place": "義大利",
    "title": "挺義大利總理，歐盟暫不對義預算案表示意見"
  },
  {
    "date": "2016/10/18",
    "year": 2016,
    "month": 10,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美國防部長支持伊拉克解放摩蘇爾之行動"
  },
  {
    "date": "2016/10/18",
    "year": 2016,
    "month": 10,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "聯合國宣布葉門將停火72小時"
  },
  {
    "date": "2016/10/18",
    "year": 2016,
    "month": 10,
    "day": 18,
    "area": "亞洲",
    "place": "新加坡",
    "title": "新加坡展開歷年最大反恐演習"
  },
  {
    "date": "2016/10/18",
    "year": 2016,
    "month": 10,
    "day": 18,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲政府軍8月間擊斃逾百名「阿布沙伊夫」成員"
  },
  {
    "date": "2016/10/19",
    "year": 2016,
    "month": 10,
    "day": 19,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞「青年黨」攻擊戰略重鎮阿夫戈耶"
  },
  {
    "date": "2016/10/19",
    "year": 2016,
    "month": 10,
    "day": 19,
    "area": "中南美洲",
    "place": "厄瓜多",
    "title": "憂影響美國大選，厄瓜多坦承限制亞桑傑上網"
  },
  {
    "date": "2016/10/19",
    "year": 2016,
    "month": 10,
    "day": 19,
    "area": "歐洲",
    "place": "比利時",
    "title": "伊拉克若收復摩蘇爾，歐盟：大批戰士恐湧入歐洲"
  },
  {
    "date": "2016/10/19",
    "year": 2016,
    "month": 10,
    "day": 19,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯航母編隊駛入北海，將前往敘利亞"
  },
  {
    "date": "2016/10/19",
    "year": 2016,
    "month": 10,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "美國要求伊朗釋放被判刑的美國公民"
  },
  {
    "date": "2016/10/19",
    "year": 2016,
    "month": 10,
    "day": 19,
    "area": "亞洲",
    "place": "馬來西亞",
    "title": "摩蘇爾收復戰開打，大馬加強維安阻聖戰士回流"
  },
  {
    "date": "2016/10/20",
    "year": 2016,
    "month": 10,
    "day": 20,
    "area": "非洲",
    "place": "剛果民主共和國",
    "title": "剛果前副總統收買證人，國際刑事法院判有罪"
  },
  {
    "date": "2016/10/20",
    "year": 2016,
    "month": 10,
    "day": 20,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西眾院前議長古尼雅涉貪被捕"
  },
  {
    "date": "2016/10/20",
    "year": 2016,
    "month": 10,
    "day": 20,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時法語區反對，歐加自貿協定卡關"
  },
  {
    "date": "2016/10/20",
    "year": 2016,
    "month": 10,
    "day": 20,
    "area": "歐洲",
    "place": "英國",
    "title": "英相梅伊出席歐盟峰會，將爭取各國支持平順的脫歐過程"
  },
  {
    "date": "2016/10/20",
    "year": 2016,
    "month": 10,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "美國展開第三輪總統候選人電視辯論"
  },
  {
    "date": "2016/10/20",
    "year": 2016,
    "month": 10,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "阿富汗聯軍基地遭攻擊，美籍人士2死3傷"
  },
  {
    "date": "2016/10/20",
    "year": 2016,
    "month": 10,
    "day": 20,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓總統：準備向美國「說再見」"
  },
  {
    "date": "2016/10/20",
    "year": 2016,
    "month": 10,
    "day": 20,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克政府軍擬收復境內最大基督教城鎮"
  },
  {
    "date": "2016/10/21",
    "year": 2016,
    "month": 10,
    "day": 21,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "衣索比亞鎮壓反政府示威，逮捕超過1,600人"
  },
  {
    "date": "2016/10/21",
    "year": 2016,
    "month": 10,
    "day": 21,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西儲水壩潰堤致鐵礦廢料外溢，檢方起訴21人"
  },
  {
    "date": "2016/10/21",
    "year": 2016,
    "month": 10,
    "day": 21,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯：阿勒坡人道停火將延長24小時"
  },
  {
    "date": "2016/10/21",
    "year": 2016,
    "month": 10,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "川普：假如是我贏得大選，就會接受選舉結果"
  },
  {
    "date": "2016/10/21",
    "year": 2016,
    "month": 10,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "菲總統要與美國「分道揚鑣」，美國務院：令人不解"
  },
  {
    "date": "2016/10/21",
    "year": 2016,
    "month": 10,
    "day": 21,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "土耳其空襲敘北庫德族，造成近200人喪生"
  },
  {
    "date": "2016/10/21",
    "year": 2016,
    "month": 10,
    "day": 21,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓20日再度試射飛彈，失敗收場"
  },
  {
    "date": "2016/10/24",
    "year": 2016,
    "month": 10,
    "day": 24,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉中止罷免總統之公投連署"
  },
  {
    "date": "2016/10/24",
    "year": 2016,
    "month": 10,
    "day": 24,
    "area": "歐洲",
    "place": "西班牙",
    "title": "西班牙反對黨讓步，西班牙有望組成少數政府"
  },
  {
    "date": "2016/10/24",
    "year": 2016,
    "month": 10,
    "day": 24,
    "area": "歐洲",
    "place": "法國",
    "title": "法國將拆除「叢林」難民營"
  },
  {
    "date": "2016/10/24",
    "year": 2016,
    "month": 10,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "美國最新民調：柯琳頓領先川普12個百分點"
  },
  {
    "date": "2016/10/24",
    "year": 2016,
    "month": 10,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "南加州觀光巴士撞上卡車，13死31傷"
  },
  {
    "date": "2016/10/24",
    "year": 2016,
    "month": 10,
    "day": 24,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "庫德族戰士攻進摩蘇爾附近城鎮"
  },
  {
    "date": "2016/10/24",
    "year": 2016,
    "month": 10,
    "day": 24,
    "area": "亞洲",
    "place": "日本",
    "title": "日本宇都宮市公園驚傳爆炸，釀1死3傷"
  },
  {
    "date": "2016/10/25",
    "year": 2016,
    "month": 10,
    "day": 25,
    "area": "非洲",
    "place": "利比亞",
    "title": "利比亞政府軍自IS救出13名外國人質"
  },
  {
    "date": "2016/10/25",
    "year": 2016,
    "month": 10,
    "day": 25,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞政府與FARC重啟和平談判"
  },
  {
    "date": "2016/10/25",
    "year": 2016,
    "month": 10,
    "day": 25,
    "area": "歐洲",
    "place": "德國",
    "title": "德國證實35名持土耳其外交護照人士申請庇護"
  },
  {
    "date": "2016/10/25",
    "year": 2016,
    "month": 10,
    "day": 25,
    "area": "歐洲",
    "place": "波蘭",
    "title": "波蘭國會擬修法限制墮胎，各大城市婦女串聯抗議"
  },
  {
    "date": "2016/10/25",
    "year": 2016,
    "month": 10,
    "day": 25,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大：CETA結果必須等歐洲做出決定"
  },
  {
    "date": "2016/10/25",
    "year": 2016,
    "month": 10,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "「歐記健保」2017年保費將調漲25%"
  },
  {
    "date": "2016/10/25",
    "year": 2016,
    "month": 10,
    "day": 25,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦警察學校遇襲，釀至少44死"
  },
  {
    "date": "2016/10/25",
    "year": 2016,
    "month": 10,
    "day": 25,
    "area": "亞洲",
    "place": "印度",
    "title": "印度警方擊斃至少24名毛派叛軍"
  },
  {
    "date": "2016/10/26",
    "year": 2016,
    "month": 10,
    "day": 26,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞宣布所有死刑者減刑為終生監禁"
  },
  {
    "date": "2016/10/26",
    "year": 2016,
    "month": 10,
    "day": 26,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉國會決定對總統展開審判"
  },
  {
    "date": "2016/10/26",
    "year": 2016,
    "month": 10,
    "day": 26,
    "area": "歐洲",
    "place": "挪威",
    "title": "挪威明年將試行開放逾300名美軍進駐"
  },
  {
    "date": "2016/10/26",
    "year": 2016,
    "month": 10,
    "day": 26,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟邊境管制擬延長3個月"
  },
  {
    "date": "2016/10/26",
    "year": 2016,
    "month": 10,
    "day": 26,
    "area": "北美洲",
    "place": "加拿大",
    "title": "寂寞星球：加拿大獲選為2017年最佳旅遊地"
  },
  {
    "date": "2016/10/26",
    "year": 2016,
    "month": 10,
    "day": 26,
    "area": "北美洲",
    "place": "美國",
    "title": "美國民調：多數人看好柯琳頓當選，對計票公正性有信心"
  },
  {
    "date": "2016/10/26",
    "year": 2016,
    "month": 10,
    "day": 26,
    "area": "亞洲",
    "place": "日本",
    "title": "菲國總統杜特蒂訪日"
  },
  {
    "date": "2016/10/26",
    "year": 2016,
    "month": 10,
    "day": 26,
    "area": "亞洲",
    "place": "巴基斯坦",
    "title": "巴基斯坦警校遇襲，伊斯蘭國及塔利班分支承認犯行"
  },
  {
    "date": "2016/10/27",
    "year": 2016,
    "month": 10,
    "day": 27,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞小型港口遭IS相關組織攻占"
  },
  {
    "date": "2016/10/27",
    "year": 2016,
    "month": 10,
    "day": 27,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉反對黨呼籲民眾展開大罷工"
  },
  {
    "date": "2016/10/27",
    "year": 2016,
    "month": 10,
    "day": 27,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯否認要求讓航母在西班牙港口加油"
  },
  {
    "date": "2016/10/27",
    "year": 2016,
    "month": 10,
    "day": 27,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利中部連續發生規模5/5和6/1強震"
  },
  {
    "date": "2016/10/27",
    "year": 2016,
    "month": 10,
    "day": 27,
    "area": "亞洲",
    "place": "日本",
    "title": "日菲領導人展開會談"
  },
  {
    "date": "2016/10/27",
    "year": 2016,
    "month": 10,
    "day": 27,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞伊德利布省遭空襲，多名孩童死亡"
  },
  {
    "date": "2016/10/28",
    "year": 2016,
    "month": 10,
    "day": 28,
    "area": "非洲",
    "place": "馬達加斯加",
    "title": "聯合國：馬達加斯加150萬人面臨飢荒"
  },
  {
    "date": "2016/10/28",
    "year": 2016,
    "month": 10,
    "day": 28,
    "area": "歐洲",
    "place": "比利時",
    "title": "曾為IS性奴隸之亞茲迪少女獲頒歐盟「沙卡洛夫人權獎」"
  },
  {
    "date": "2016/10/28",
    "year": 2016,
    "month": 10,
    "day": 28,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時終於點頭，歐加自貿協定突破僵局"
  },
  {
    "date": "2016/10/28",
    "year": 2016,
    "month": 10,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "白宮：歐巴馬總統為98名囚犯減刑"
  },
  {
    "date": "2016/10/28",
    "year": 2016,
    "month": 10,
    "day": 28,
    "area": "亞洲",
    "place": "南韓",
    "title": "密友涉嫌干政，南韓總統朴槿惠支持率跌至新低"
  },
  {
    "date": "2016/10/28",
    "year": 2016,
    "month": 10,
    "day": 28,
    "area": "亞洲",
    "place": "日本",
    "title": "日本天皇叔父三笠宮逝世，享嵩壽百歲"
  },
  {
    "date": "2016/10/31",
    "year": 2016,
    "month": 10,
    "day": 31,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟與加拿大正式簽署全面貿易協定"
  },
  {
    "date": "2016/10/31",
    "year": 2016,
    "month": 10,
    "day": 31,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利中部出現3個月來第4次強震"
  },
  {
    "date": "2016/10/31",
    "year": 2016,
    "month": 10,
    "day": 31,
    "area": "北美洲",
    "place": "美國",
    "title": "FBI選前重啟電郵案調查，民主黨：此舉恐已違法"
  },
  {
    "date": "2016/10/31",
    "year": 2016,
    "month": 10,
    "day": 31,
    "area": "北美洲",
    "place": "美國",
    "title": "美國最新民調：柯琳頓與川普平分秋色，投票率成關鍵"
  },
  {
    "date": "2016/10/31",
    "year": 2016,
    "month": 10,
    "day": 31,
    "area": "亞洲",
    "place": "南韓",
    "title": "密友涉嫌干政，執政黨要求朴槿惠成立中立內閣"
  },
  {
    "date": "2016/10/31",
    "year": 2016,
    "month": 10,
    "day": 31,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲擬對搭船偷渡者祭出<U+7EC8>身簽證禁令"
  },
  {
    "date": "2016/11/1",
    "year": 2016,
    "month": 11,
    "day": 1,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西市政選舉結果出爐，支持政府派政黨大勝"
  },
  {
    "date": "2016/11/1",
    "year": 2016,
    "month": 11,
    "day": 1,
    "area": "中南美洲",
    "place": "薩爾瓦多",
    "title": "薩爾瓦多前總統及多名高層涉貪遭逮"
  },
  {
    "date": "2016/11/1",
    "year": 2016,
    "month": 11,
    "day": 1,
    "area": "歐洲",
    "place": "英國",
    "title": "英國情報首長：俄羅斯對英國威脅日增"
  },
  {
    "date": "2016/11/1",
    "year": 2016,
    "month": 11,
    "day": 1,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利規模6/6強震導致1萬5,000人無家可歸"
  },
  {
    "date": "2016/11/1",
    "year": 2016,
    "month": 11,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "白宮：不會捍衛或批評FBI重啟柯琳頓電郵案的決定"
  },
  {
    "date": "2016/11/1",
    "year": 2016,
    "month": 11,
    "day": 1,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大：2017年移民名額為30萬人"
  },
  {
    "date": "2016/11/1",
    "year": 2016,
    "month": 11,
    "day": 1,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓總統朴槿惠密友崔順實接受檢方調查"
  },
  {
    "date": "2016/11/1",
    "year": 2016,
    "month": 11,
    "day": 1,
    "area": "亞洲",
    "place": "印度",
    "title": "印度8名越獄囚犯遭警方擊斃"
  },
  {
    "date": "2016/11/2",
    "year": 2016,
    "month": 11,
    "day": 2,
    "area": "非洲",
    "place": "摩洛哥",
    "title": "執法致魚販喪命，摩洛哥民眾上街抗議"
  },
  {
    "date": "2016/11/2",
    "year": 2016,
    "month": 11,
    "day": 2,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "回應反對陣營訴求，委內瑞拉釋放3政治犯"
  },
  {
    "date": "2016/11/2",
    "year": 2016,
    "month": 11,
    "day": 2,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯知名異議份子控訴獄警虐待"
  },
  {
    "date": "2016/11/2",
    "year": 2016,
    "month": 11,
    "day": 2,
    "area": "歐洲",
    "place": "保加利亞",
    "title": "保加利亞警方查獲千萬歐元偽鈔"
  },
  {
    "date": "2016/11/2",
    "year": 2016,
    "month": 11,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓陣營要求FBI公布川普與俄羅斯的關係"
  },
  {
    "date": "2016/11/2",
    "year": 2016,
    "month": 11,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "川普民調領先柯琳頓，金融市場陷入不安"
  },
  {
    "date": "2016/11/2",
    "year": 2016,
    "month": 11,
    "day": 2,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓政府提名新總理及財政部長"
  },
  {
    "date": "2016/11/2",
    "year": 2016,
    "month": 11,
    "day": 2,
    "area": "亞洲",
    "place": "伊拉克",
    "title": "伊拉克政府軍首度攻進摩蘇爾市區"
  },
  {
    "date": "2016/11/3",
    "year": 2016,
    "month": 11,
    "day": 3,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "肯亞退出南蘇丹維和任務"
  },
  {
    "date": "2016/11/3",
    "year": 2016,
    "month": 11,
    "day": 3,
    "area": "歐洲",
    "place": "法國",
    "title": "法國當局將滯留加萊「叢林」難民營孩童全數撤出"
  },
  {
    "date": "2016/11/3",
    "year": 2016,
    "month": 11,
    "day": 3,
    "area": "歐洲",
    "place": "比利時",
    "title": "比利時移民部長拒發難民簽證遭罰"
  },
  {
    "date": "2016/11/3",
    "year": 2016,
    "month": 11,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "聯準會維持利率不變，暗示12月將升息"
  },
  {
    "date": "2016/11/3",
    "year": 2016,
    "month": 11,
    "day": 3,
    "area": "北美洲",
    "place": "美國",
    "title": "最新民調：柯琳頓領先川普6個百分點"
  },
  {
    "date": "2016/11/3",
    "year": 2016,
    "month": 11,
    "day": 3,
    "area": "亞洲",
    "place": "日本",
    "title": "日相安倍與翁山蘇姬會談，承諾提供緬甸金援"
  },
  {
    "date": "2016/11/3",
    "year": 2016,
    "month": 11,
    "day": 3,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼快艇翻覆，釀至少18死"
  },
  {
    "date": "2016/11/3",
    "year": 2016,
    "month": 11,
    "day": 3,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港本土派議員宣誓就職再次受阻"
  },
  {
    "date": "2016/11/4",
    "year": 2016,
    "month": 11,
    "day": 4,
    "area": "非洲",
    "place": "南非",
    "title": "南非數千民眾上街要求涉貪總統下台"
  },
  {
    "date": "2016/11/4",
    "year": 2016,
    "month": 11,
    "day": 4,
    "area": "非洲",
    "place": "利比亞",
    "title": "聯合國：利比亞外海2起船難釀至少239死"
  },
  {
    "date": "2016/11/4",
    "year": 2016,
    "month": 11,
    "day": 4,
    "area": "歐洲",
    "place": "比利時",
    "title": "巴黎氣候協定今正式生效"
  },
  {
    "date": "2016/11/4",
    "year": 2016,
    "month": 11,
    "day": 4,
    "area": "歐洲",
    "place": "英國",
    "title": "英國高等法院：啟動脫歐需國會表決同意"
  },
  {
    "date": "2016/11/4",
    "year": 2016,
    "month": 11,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "白宮：TPP未過，美國對日出口拱手讓陸"
  },
  {
    "date": "2016/11/4",
    "year": 2016,
    "month": 11,
    "day": 4,
    "area": "北美洲",
    "place": "美國",
    "title": "美國總統大選選情陷入膠著"
  },
  {
    "date": "2016/11/4",
    "year": 2016,
    "month": 11,
    "day": 4,
    "area": "亞洲",
    "place": "南韓",
    "title": "深陷密友干政醜聞，南韓總統公開道歉"
  },
  {
    "date": "2016/11/4",
    "year": 2016,
    "month": 11,
    "day": 4,
    "area": "亞洲",
    "place": "黎巴嫩",
    "title": "黎巴嫩總統提名遜尼派領導人擔任總理"
  },
  {
    "date": "2016/11/7",
    "year": 2016,
    "month": 11,
    "day": 7,
    "area": "非洲",
    "place": "南非",
    "title": "被指控涉貪，南非總統稱不害怕坐牢"
  },
  {
    "date": "2016/11/7",
    "year": 2016,
    "month": 11,
    "day": 7,
    "area": "中南美洲",
    "place": "尼加拉瓜",
    "title": "尼加拉瓜總統可望再度連任"
  },
  {
    "date": "2016/11/7",
    "year": 2016,
    "month": 11,
    "day": 7,
    "area": "歐洲",
    "place": "梵蒂岡",
    "title": "教宗為千名囚犯舉行特別彌撒"
  },
  {
    "date": "2016/11/7",
    "year": 2016,
    "month": 11,
    "day": 7,
    "area": "歐洲",
    "place": "德國",
    "title": "因應「伊斯蘭國」滲透，德擬強制對新兵安全調查"
  },
  {
    "date": "2016/11/7",
    "year": 2016,
    "month": 11,
    "day": 7,
    "area": "北美洲",
    "place": "美國",
    "title": "FBI：柯琳頓電郵案查無犯罪證據，維持不起訴建議"
  },
  {
    "date": "2016/11/7",
    "year": 2016,
    "month": 11,
    "day": 7,
    "area": "北美洲",
    "place": "美國",
    "title": "憂柯琳頓勝選實施槍枝管制，美國槍枝銷售大增"
  },
  {
    "date": "2016/11/7",
    "year": 2016,
    "month": 11,
    "day": 7,
    "area": "亞洲",
    "place": "日本",
    "title": "日媒：日印預計本週簽署核能合作協議"
  },
  {
    "date": "2016/11/7",
    "year": 2016,
    "month": 11,
    "day": 7,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓檢方逮捕朴槿惠2名前幕僚"
  },
  {
    "date": "2016/11/8",
    "year": 2016,
    "month": 11,
    "day": 8,
    "area": "中南美洲",
    "place": "尼加拉瓜",
    "title": "尼加拉瓜總統奧蒂嘉連續第三度當選"
  },
  {
    "date": "2016/11/8",
    "year": 2016,
    "month": 11,
    "day": 8,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西政府凍結里約熱內盧州銀行帳戶"
  },
  {
    "date": "2016/11/8",
    "year": 2016,
    "month": 11,
    "day": 8,
    "area": "歐洲",
    "place": "比利時",
    "title": "因應俄軍威脅，北約擬讓更多部隊提高警戒狀態"
  },
  {
    "date": "2016/11/8",
    "year": 2016,
    "month": 11,
    "day": 8,
    "area": "歐洲",
    "place": "英國",
    "title": "英首相籲國會不要阻撓「脫歐」"
  },
  {
    "date": "2016/11/8",
    "year": 2016,
    "month": 11,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "選前最後民調：柯琳頓有九成機會當選"
  },
  {
    "date": "2016/11/8",
    "year": 2016,
    "month": 11,
    "day": 8,
    "area": "北美洲",
    "place": "美國",
    "title": "美國第一位女性司法部長辭世"
  },
  {
    "date": "2016/11/8",
    "year": 2016,
    "month": 11,
    "day": 8,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲國會否決舉行同性婚姻公投草案"
  },
  {
    "date": "2016/11/8",
    "year": 2016,
    "month": 11,
    "day": 8,
    "area": "亞洲",
    "place": "南韓",
    "title": "調查密友干政醜聞，南韓檢方搜索三星集團"
  },
  {
    "date": "2016/11/9",
    "year": 2016,
    "month": 11,
    "day": 9,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞礦場遭槍手攻擊，釀逾30死"
  },
  {
    "date": "2016/11/9",
    "year": 2016,
    "month": 11,
    "day": 9,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "莫斯科：美外交官未來不得觀察俄國選舉"
  },
  {
    "date": "2016/11/9",
    "year": 2016,
    "month": 11,
    "day": 9,
    "area": "歐洲",
    "place": "德國",
    "title": "德國警方逮捕5名伊斯蘭國重要成員"
  },
  {
    "date": "2016/11/9",
    "year": 2016,
    "month": 11,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "川普選舉人票大幅領先，柯琳頓陣營暫未承認敗選"
  },
  {
    "date": "2016/11/9",
    "year": 2016,
    "month": 11,
    "day": 9,
    "area": "北美洲",
    "place": "加拿大",
    "title": "恐暴露於伊波拉病毒環境，加拿大實驗室研究員已隔離觀察"
  },
  {
    "date": "2016/11/9",
    "year": 2016,
    "month": 11,
    "day": 9,
    "area": "亞洲",
    "place": "印度",
    "title": "打擊貪腐，印度總理宣布廢除大面額紙鈔"
  },
  {
    "date": "2016/11/10",
    "year": 2016,
    "month": 11,
    "day": 10,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴將展開全國軍事演習"
  },
  {
    "date": "2016/11/10",
    "year": 2016,
    "month": 11,
    "day": 10,
    "area": "中南美洲",
    "place": "巴西",
    "title": "里約熱內盧州公務員抗議撙節措施"
  },
  {
    "date": "2016/11/10",
    "year": 2016,
    "month": 11,
    "day": 10,
    "area": "歐洲",
    "place": "德國",
    "title": "川普當選美國總統，德英籲持續合作關係"
  },
  {
    "date": "2016/11/10",
    "year": 2016,
    "month": 11,
    "day": 10,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄國稱將與美國「全面恢復關係」"
  },
  {
    "date": "2016/11/10",
    "year": 2016,
    "month": 11,
    "day": 10,
    "area": "北美洲",
    "place": "美國",
    "title": "川普入主白宮，副手彭斯將扮演溝通橋樑"
  },
  {
    "date": "2016/11/10",
    "year": 2016,
    "month": 11,
    "day": 10,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓敗選感言，籲民眾以開放心胸接納川普"
  },
  {
    "date": "2016/11/10",
    "year": 2016,
    "month": 11,
    "day": 10,
    "area": "亞洲",
    "place": "日本",
    "title": "安倍擬17日與川普在紐約會面"
  },
  {
    "date": "2016/11/10",
    "year": 2016,
    "month": 11,
    "day": 10,
    "area": "亞洲",
    "place": "日本",
    "title": "投資人恢復冷靜，亞股10日上演反彈行情"
  },
  {
    "date": "2016/11/11",
    "year": 2016,
    "month": 11,
    "day": 11,
    "area": "非洲",
    "place": "南非",
    "title": "南非國會對總統進行不信任投票"
  },
  {
    "date": "2016/11/11",
    "year": 2016,
    "month": 11,
    "day": 11,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥稱願與川普討論北美自由貿易協定"
  },
  {
    "date": "2016/11/11",
    "year": 2016,
    "month": 11,
    "day": 11,
    "area": "歐洲",
    "place": "比利時",
    "title": "未來走向不明，歐盟邀川普共商對策"
  },
  {
    "date": "2016/11/11",
    "year": 2016,
    "month": 11,
    "day": 11,
    "area": "歐洲",
    "place": "德國",
    "title": "德國近六成民眾支持梅克爾爭取連任"
  },
  {
    "date": "2016/11/11",
    "year": 2016,
    "month": 11,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬邀請川普至白宮商討交接事宜"
  },
  {
    "date": "2016/11/11",
    "year": 2016,
    "month": 11,
    "day": 11,
    "area": "北美洲",
    "place": "美國",
    "title": "全美各大城市出現反川普示威遊行"
  },
  {
    "date": "2016/11/11",
    "year": 2016,
    "month": 11,
    "day": 11,
    "area": "亞洲",
    "place": "泰國",
    "title": "防撞天燈，泰國清邁機場取消下週多個航班"
  },
  {
    "date": "2016/11/11",
    "year": 2016,
    "month": 11,
    "day": 11,
    "area": "亞洲",
    "place": "阿富汗",
    "title": "塔利班攻擊德國駐阿富汗領館，至少2死"
  },
  {
    "date": "2016/11/14",
    "year": 2016,
    "month": 11,
    "day": 14,
    "area": "非洲",
    "place": "埃及",
    "title": "IMF同意提供埃及120億美元貸款紓困"
  },
  {
    "date": "2016/11/14",
    "year": 2016,
    "month": 11,
    "day": 14,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞政府與叛軍簽署新和平協議"
  },
  {
    "date": "2016/11/14",
    "year": 2016,
    "month": 11,
    "day": 14,
    "area": "歐洲",
    "place": "保加利亞",
    "title": "保加利亞總理宣布請辭"
  },
  {
    "date": "2016/11/14",
    "year": 2016,
    "month": 11,
    "day": 14,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄聯邦安全局破獲恐攻計畫，逮捕10人"
  },
  {
    "date": "2016/11/14",
    "year": 2016,
    "month": 11,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "川普公布兩項重要人事任命"
  },
  {
    "date": "2016/11/14",
    "year": 2016,
    "month": 11,
    "day": 14,
    "area": "北美洲",
    "place": "美國",
    "title": "川普接受專訪稱：上任後將驅逐300萬非法移民"
  },
  {
    "date": "2016/11/14",
    "year": 2016,
    "month": 11,
    "day": 14,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓檢方本週將約談總統朴槿惠"
  },
  {
    "date": "2016/11/14",
    "year": 2016,
    "month": 11,
    "day": 14,
    "area": "亞洲",
    "place": "紐西蘭",
    "title": "紐西蘭7/8強震，至少2死"
  },
  {
    "date": "2016/11/15",
    "year": 2016,
    "month": 11,
    "day": 15,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞什葉派穆斯林與警方發生衝突，釀至少9死"
  },
  {
    "date": "2016/11/15",
    "year": 2016,
    "month": 11,
    "day": 15,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委國總統：不會提前舉行大選"
  },
  {
    "date": "2016/11/15",
    "year": 2016,
    "month": 11,
    "day": 15,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "普亭與川普就敘利亞危機及恐怖主義交換意見"
  },
  {
    "date": "2016/11/15",
    "year": 2016,
    "month": 11,
    "day": 15,
    "area": "歐洲",
    "place": "德國",
    "title": "德國執政聯盟共推現任外長角逐總統寶座"
  },
  {
    "date": "2016/11/15",
    "year": 2016,
    "month": 11,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬：川普會信守北約承諾"
  },
  {
    "date": "2016/11/15",
    "year": 2016,
    "month": 11,
    "day": 15,
    "area": "亞洲",
    "place": "紐西蘭",
    "title": "餘震不斷，紐西蘭出動直升機撤離受困遊客"
  },
  {
    "date": "2016/11/15",
    "year": 2016,
    "month": 11,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "日本將派自衛隊赴南蘇丹執行馳援護衛任務"
  },
  {
    "date": "2016/11/16",
    "year": 2016,
    "month": 11,
    "day": 16,
    "area": "中南美洲",
    "place": "奈及利亞",
    "title": "聯合國：奈及利亞7萬5,000名兒童面臨餓死風險"
  },
  {
    "date": "2016/11/16",
    "year": 2016,
    "month": 11,
    "day": 16,
    "area": "中南美洲",
    "place": "古巴",
    "title": "響應慈悲禧年，古巴特赦787名囚犯"
  },
  {
    "date": "2016/11/16",
    "year": 2016,
    "month": 11,
    "day": 16,
    "area": "歐洲",
    "place": "摩爾多瓦",
    "title": "親俄候選人當選摩爾多瓦總統"
  },
  {
    "date": "2016/11/16",
    "year": 2016,
    "month": 11,
    "day": 16,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄國航母對敘利亞展開首波攻擊"
  },
  {
    "date": "2016/11/16",
    "year": 2016,
    "month": 11,
    "day": 16,
    "area": "亞洲",
    "place": "日本",
    "title": "日本一週內修復福岡博多車站前塌陷大洞"
  },
  {
    "date": "2016/11/16",
    "year": 2016,
    "month": 11,
    "day": 16,
    "area": "兩岸三地",
    "place": "香港",
    "title": "香港法院判決游蕙禎及梁頌恆喪失議員資格"
  },
  {
    "date": "2016/11/17",
    "year": 2016,
    "month": 11,
    "day": 17,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞決定延後半年關閉達達阿比難民營"
  },
  {
    "date": "2016/11/17",
    "year": 2016,
    "month": 11,
    "day": 17,
    "area": "中南美洲",
    "place": "宏都拉斯",
    "title": "中美洲聯合部隊展開行動打擊幫派及組織犯罪"
  },
  {
    "date": "2016/11/17",
    "year": 2016,
    "month": 11,
    "day": 17,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟擬向免簽旅客收取5歐元安檢費"
  },
  {
    "date": "2016/11/17",
    "year": 2016,
    "month": 11,
    "day": 17,
    "area": "歐洲",
    "place": "法國",
    "title": "法國難民保護局：難民尋求庇護速度趨緩"
  },
  {
    "date": "2016/11/17",
    "year": 2016,
    "month": 11,
    "day": 17,
    "area": "北美洲",
    "place": "美國",
    "title": "憂川普對俄立場軟化，美眾議院先發制人"
  },
  {
    "date": "2016/11/17",
    "year": 2016,
    "month": 11,
    "day": 17,
    "area": "亞洲",
    "place": "越南",
    "title": "越南：已停止推動TPP"
  },
  {
    "date": "2016/11/17",
    "year": 2016,
    "month": 11,
    "day": 17,
    "area": "亞洲",
    "place": "日本",
    "title": "安倍盼與川普建立互信，重申美日同盟之重要性"
  },
  {
    "date": "2016/11/18",
    "year": 2016,
    "month": 11,
    "day": 18,
    "area": "非洲",
    "place": "莫三比克",
    "title": "莫三比克運油車爆炸，釀至少73死"
  },
  {
    "date": "2016/11/18",
    "year": 2016,
    "month": 11,
    "day": 18,
    "area": "中南美洲",
    "place": "秘魯",
    "title": "APEC年度會議在秘魯利馬展開"
  },
  {
    "date": "2016/11/18",
    "year": 2016,
    "month": 11,
    "day": 18,
    "area": "歐洲",
    "place": "英國",
    "title": "英國脫歐公投後面臨大批東歐勞工湧入"
  },
  {
    "date": "2016/11/18",
    "year": 2016,
    "month": 11,
    "day": 18,
    "area": "歐洲",
    "place": "德國",
    "title": "是否競選連任，德國總理仍持保留態度"
  },
  {
    "date": "2016/11/18",
    "year": 2016,
    "month": 11,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美復甦力道強勁，葉倫：升息時機近了"
  },
  {
    "date": "2016/11/18",
    "year": 2016,
    "month": 11,
    "day": 18,
    "area": "北美洲",
    "place": "美國",
    "title": "美媒：川普延攬前國防情報局長出任國安顧問"
  },
  {
    "date": "2016/11/18",
    "year": 2016,
    "month": 11,
    "day": 18,
    "area": "亞洲",
    "place": "日本",
    "title": "安倍：我對川普很有信心"
  },
  {
    "date": "2016/11/18",
    "year": 2016,
    "month": 11,
    "day": 18,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓舉行大學入學考，上班時間、股市開市延後一小時"
  },
  {
    "date": "2016/11/21",
    "year": 2016,
    "month": 11,
    "day": 21,
    "area": "中南美洲",
    "place": "祕魯",
    "title": "APEC領袖重申對抗各種形式貿易保護主義"
  },
  {
    "date": "2016/11/21",
    "year": 2016,
    "month": 11,
    "day": 21,
    "area": "中南美洲",
    "place": "海地",
    "title": "海地舉行總統大選"
  },
  {
    "date": "2016/11/21",
    "year": 2016,
    "month": 11,
    "day": 21,
    "area": "歐洲",
    "place": "德國",
    "title": "德國總理梅克爾宣布尋求連任"
  },
  {
    "date": "2016/11/21",
    "year": 2016,
    "month": 11,
    "day": 21,
    "area": "歐洲",
    "place": "法國",
    "title": "沙柯吉初選落敗，無緣競選法國總統"
  },
  {
    "date": "2016/11/21",
    "year": 2016,
    "month": 11,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "歐巴馬促TPP成員國致力公平貿易"
  },
  {
    "date": "2016/11/21",
    "year": 2016,
    "month": 11,
    "day": 21,
    "area": "北美洲",
    "place": "美國",
    "title": "美國發射歷來最先進氣象衛星GOES-R"
  },
  {
    "date": "2016/11/21",
    "year": 2016,
    "month": 11,
    "day": 21,
    "area": "亞洲",
    "place": "印度",
    "title": "印度火車出軌，至少百餘人罹難"
  },
  {
    "date": "2016/11/21",
    "year": 2016,
    "month": 11,
    "day": 21,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞外長：盼川普停止軍援叛軍組織"
  },
  {
    "date": "2016/11/22",
    "year": 2016,
    "month": 11,
    "day": 22,
    "area": "中南美洲",
    "place": "海地",
    "title": "海地展開計票工作"
  },
  {
    "date": "2016/11/22",
    "year": 2016,
    "month": 11,
    "day": 22,
    "area": "歐洲",
    "place": "梵蒂岡",
    "title": "教宗方濟各賦予神父赦免墮胎的權力"
  },
  {
    "date": "2016/11/22",
    "year": 2016,
    "month": 11,
    "day": 22,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯國防部指控烏克蘭非法扣押俄國軍人"
  },
  {
    "date": "2016/11/22",
    "year": 2016,
    "month": 11,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "美國務院：年終歐洲恐攻風險有升高之虞"
  },
  {
    "date": "2016/11/22",
    "year": 2016,
    "month": 11,
    "day": 22,
    "area": "北美洲",
    "place": "美國",
    "title": "川普揭櫫上任後六大優先工作"
  },
  {
    "date": "2016/11/22",
    "year": 2016,
    "month": 11,
    "day": 22,
    "area": "亞洲",
    "place": "日本",
    "title": "日本東北部外海發生7/4強震，氣象廳發布海嘯警報"
  },
  {
    "date": "2016/11/22",
    "year": 2016,
    "month": 11,
    "day": 22,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓擬將黃岩島海域設為禁漁區"
  },
  {
    "date": "2016/11/22",
    "year": 2016,
    "month": 11,
    "day": 22,
    "area": "亞洲",
    "place": "日本",
    "title": "安倍：TPP少了美國，就沒有意義"
  },
  {
    "date": "2016/11/23",
    "year": 2016,
    "month": 11,
    "day": 23,
    "area": "歐洲",
    "place": "德國",
    "title": "受機師罷工影響，德國漢莎航空取消近900航班"
  },
  {
    "date": "2016/11/23",
    "year": 2016,
    "month": 11,
    "day": 23,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大：墨西哥公民下月起免簽入境"
  },
  {
    "date": "2016/11/23",
    "year": 2016,
    "month": 11,
    "day": 23,
    "area": "北美洲",
    "place": "美國",
    "title": "川普譴責白人優越主義運動「另類右派」"
  },
  {
    "date": "2016/11/23",
    "year": 2016,
    "month": 11,
    "day": 23,
    "area": "亞洲",
    "place": "土耳其",
    "title": "土耳其撤回性侵未成年少女可免責之法案"
  },
  {
    "date": "2016/11/23",
    "year": 2016,
    "month": 11,
    "day": 23,
    "area": "亞洲",
    "place": "越南",
    "title": "考量成本及安全疑慮，越南宣布停建核電廠"
  },
  {
    "date": "2016/11/23",
    "year": 2016,
    "month": 11,
    "day": 23,
    "area": "亞洲",
    "place": "韓國",
    "title": "南韓反對黨有意彈劾總統朴槿惠"
  },
  {
    "date": "2016/11/24",
    "year": 2016,
    "month": 11,
    "day": 24,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞將與叛軍FARC簽署新的和平協定"
  },
  {
    "date": "2016/11/24",
    "year": 2016,
    "month": 11,
    "day": 24,
    "area": "中南美洲",
    "place": "玻利維亞",
    "title": "玻利維亞大旱、水庫見底，學校提早停課"
  },
  {
    "date": "2016/11/24",
    "year": 2016,
    "month": 11,
    "day": 24,
    "area": "歐洲",
    "place": "德國",
    "title": "川普稱將退出TPP，德國總理對此表示不悅"
  },
  {
    "date": "2016/11/24",
    "year": 2016,
    "month": 11,
    "day": 24,
    "area": "歐洲",
    "place": "英國",
    "title": "殺害英國女議員，凶嫌被判終身監禁"
  },
  {
    "date": "2016/11/24",
    "year": 2016,
    "month": 11,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "聯合國將對北韓祭出更嚴厲制裁案"
  },
  {
    "date": "2016/11/24",
    "year": 2016,
    "month": 11,
    "day": 24,
    "area": "北美洲",
    "place": "美國",
    "title": "川普提名南卡州長出任駐聯合國大使"
  },
  {
    "date": "2016/11/24",
    "year": 2016,
    "month": 11,
    "day": 24,
    "area": "亞洲",
    "place": "印度",
    "title": "印度擬將高速公路作為戰機緊急起降跑道"
  },
  {
    "date": "2016/11/24",
    "year": 2016,
    "month": 11,
    "day": 24,
    "area": "亞洲",
    "place": "南韓",
    "title": "查密友干政案，南韓檢調搜索樂天、SK集團"
  },
  {
    "date": "2016/11/25",
    "year": 2016,
    "month": 11,
    "day": 25,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞政府與叛軍FARC簽署新的和平協議"
  },
  {
    "date": "2016/11/25",
    "year": 2016,
    "month": 11,
    "day": 25,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐洲議會通過暫停土耳其入歐談判"
  },
  {
    "date": "2016/11/25",
    "year": 2016,
    "month": 11,
    "day": 25,
    "area": "歐洲",
    "place": "烏克蘭",
    "title": "烏克蘭公民可望免簽進入歐洲申根國家"
  },
  {
    "date": "2016/11/25",
    "year": 2016,
    "month": 11,
    "day": 25,
    "area": "北美洲",
    "place": "美國",
    "title": "美國綠黨募得350萬美元，將申請重新計票"
  },
  {
    "date": "2016/11/25",
    "year": 2016,
    "month": 11,
    "day": 25,
    "area": "亞洲",
    "place": "緬甸",
    "title": "緬甸北部動亂9死，3,000人逃往中國大陸"
  },
  {
    "date": "2016/11/25",
    "year": 2016,
    "month": 11,
    "day": 25,
    "area": "亞洲",
    "place": "日本",
    "title": "日澳將簽署新安全協議"
  },
  {
    "date": "2016/11/28",
    "year": 2016,
    "month": 11,
    "day": 28,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞首都市集發生汽車炸彈攻擊，多人死傷"
  },
  {
    "date": "2016/11/28",
    "year": 2016,
    "month": 11,
    "day": 28,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴革命領袖卡斯楚辭世"
  },
  {
    "date": "2016/11/28",
    "year": 2016,
    "month": 11,
    "day": 28,
    "area": "歐洲",
    "place": "法國",
    "title": "法國前總理費雍將代表共和黨角逐總統大位"
  },
  {
    "date": "2016/11/28",
    "year": 2016,
    "month": 11,
    "day": 28,
    "area": "歐洲",
    "place": "瑞士",
    "title": "瑞士公投否決加快廢除核電廠的提案"
  },
  {
    "date": "2016/11/28",
    "year": 2016,
    "month": 11,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "柯琳頓陣營稱將參與重驗總統選票作業"
  },
  {
    "date": "2016/11/28",
    "year": 2016,
    "month": 11,
    "day": 28,
    "area": "北美洲",
    "place": "美國",
    "title": "卡斯楚逝世，美國準副總統稱「古巴顯露新希望曙光」"
  },
  {
    "date": "2016/11/28",
    "year": 2016,
    "month": 11,
    "day": 28,
    "area": "亞洲",
    "place": "日本",
    "title": "日本外相下月赴俄，為日俄峰會探路"
  },
  {
    "date": "2016/11/28",
    "year": 2016,
    "month": 11,
    "day": 28,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲軍擊斃菲南11名效忠IS的恐怖份子"
  },
  {
    "date": "2016/11/29",
    "year": 2016,
    "month": 11,
    "day": 29,
    "area": "非洲",
    "place": "辛巴威",
    "title": "辛巴威發行新幣，外界憂通膨噩夢重演"
  },
  {
    "date": "2016/11/29",
    "year": 2016,
    "month": 11,
    "day": 29,
    "area": "中南美洲",
    "place": "海地",
    "title": "海地商人莫伊斯贏得第一回合總統大選"
  },
  {
    "date": "2016/11/29",
    "year": 2016,
    "month": 11,
    "day": 29,
    "area": "歐洲",
    "place": "英國",
    "title": "英國獨立黨選出新黨魁"
  },
  {
    "date": "2016/11/29",
    "year": 2016,
    "month": 11,
    "day": 29,
    "area": "歐洲",
    "place": "義大利",
    "title": "自北非抵達義大利的移民人數創下新高"
  },
  {
    "date": "2016/11/29",
    "year": 2016,
    "month": 11,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "聯合國30日表決對北韓制裁案"
  },
  {
    "date": "2016/11/29",
    "year": 2016,
    "month": 11,
    "day": 29,
    "area": "北美洲",
    "place": "美國",
    "title": "南韓陷政治動盪，美國重申對韓安全承諾"
  },
  {
    "date": "2016/11/29",
    "year": 2016,
    "month": 11,
    "day": 29,
    "area": "亞洲",
    "place": "日本",
    "title": "日本盼與澳、英、法加強安全合作"
  },
  {
    "date": "2016/11/29",
    "year": 2016,
    "month": 11,
    "day": 29,
    "area": "亞洲",
    "place": "北韓",
    "title": "制裁北韓核試，安理會擬對北韓煤炭外銷設上限"
  },
  {
    "date": "2016/11/30",
    "year": 2016,
    "month": 11,
    "day": 30,
    "area": "非洲",
    "place": "南非",
    "title": "南非執政黨表態挺總統祖馬"
  },
  {
    "date": "2016/11/30",
    "year": 2016,
    "month": 11,
    "day": 30,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西足球隊包機在哥倫比亞山區墜毀，機上77人僅6人生還"
  },
  {
    "date": "2016/11/30",
    "year": 2016,
    "month": 11,
    "day": 30,
    "area": "歐洲",
    "place": "英國",
    "title": "英相梅伊與川普通電，確認NATO重要性"
  },
  {
    "date": "2016/11/30",
    "year": 2016,
    "month": 11,
    "day": 30,
    "area": "歐洲",
    "place": "荷蘭",
    "title": "荷蘭與比利時同意換地解決邊境主權問題"
  },
  {
    "date": "2016/11/30",
    "year": 2016,
    "month": 11,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "白宮：歐巴馬不會出席卡斯楚葬禮"
  },
  {
    "date": "2016/11/30",
    "year": 2016,
    "month": 11,
    "day": 30,
    "area": "北美洲",
    "place": "美國",
    "title": "川普選定台裔趙小蘭出任運輸部長"
  },
  {
    "date": "2016/11/30",
    "year": 2016,
    "month": 11,
    "day": 30,
    "area": "亞洲",
    "place": "泰國",
    "title": "泰國國會將敦請王儲瓦吉拉隆功繼位"
  },
  {
    "date": "2016/11/30",
    "year": 2016,
    "month": 11,
    "day": 30,
    "area": "亞洲",
    "place": "南韓",
    "title": "民怨難平息，朴槿惠願意提前下台"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "非洲",
    "place": "甘比亞",
    "title": "甘比亞總統大選，賈梅尋求第5任期"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "非洲",
    "place": "盧安達",
    "title": "盧安達就1994年種族大屠殺對20名法國官員展開調查"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞參院通過新版和平協議"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西足球隊空難錄音曝光，墜機時燃料已用盡"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "歐洲",
    "place": "比利時",
    "title": "川普上任在即，歐盟宣布大幅提高國防支出"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "歐洲",
    "place": "德國",
    "title": "德國情報機構疑遭伊斯蘭恐怖分子滲透"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大通過大型輸油管興建計畫"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "北美洲",
    "place": "美國",
    "title": "聯合國安理會一致同意擴大制裁北韓"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "亞洲",
    "place": "澳洲",
    "title": "澳洲民眾抗議政府難民政策不人道"
  },
  {
    "date": "2016/12/1",
    "year": 2016,
    "month": 12,
    "day": 1,
    "area": "亞洲",
    "place": "印尼",
    "title": "國際特赦組織：印尼雇用童工生產棕櫚油"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "非洲",
    "place": "衣索比亞",
    "title": "衣索比亞反對派領導人遭逮捕"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "聯合國人權委員會：南蘇丹發生種族清洗"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞國會通過新版和平協議"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "中南美洲",
    "place": "海地",
    "title": "潘基文首次為海地霍亂疫情擴散致歉"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "歐洲",
    "place": "法國",
    "title": "法國總統歐蘭德宣布將不會競選連任"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "歐洲",
    "place": "烏克蘭",
    "title": "烏克蘭在克里米亞半島附近試射飛彈"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "美大學籲川普不要驅逐無證學生"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "北美洲",
    "place": "美國",
    "title": "聯合國：年輕人口激增，全球人口增至74億"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "亞洲",
    "place": "北韓",
    "title": "北韓誓言強力反擊聯合國制裁"
  },
  {
    "date": "2016/12/2",
    "year": 2016,
    "month": 12,
    "day": 2,
    "area": "亞洲",
    "place": "泰國",
    "title": "泰國王儲瓦吉拉隆功登基為新泰皇"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "非洲",
    "place": "甘比亞",
    "title": "甘比亞強人總統賈梅競選連任失敗"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "非洲",
    "place": "利比亞",
    "title": "利比亞首都爆發兩年來最嚴重的暴力衝突"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "中南美洲",
    "place": "古巴",
    "title": "卡斯楚骨灰下葬古巴革命起源地聖地牙哥"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "因應高通膨，委內瑞拉央行將發行新鈔"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "歐洲",
    "place": "義大利",
    "title": "修憲公投未過，義大利總理請辭"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "歐洲",
    "place": "奧地利",
    "title": "奧地利總統大選，極右派候選人落敗"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "北美洲",
    "place": "加拿大",
    "title": "杜魯道政府似將擱置選制改革計畫"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "北美洲",
    "place": "美國",
    "title": "川普推特發文抨擊中國大陸"
  },
  {
    "date": "2016/12/5",
    "year": 2016,
    "month": 12,
    "day": 5,
    "area": "亞洲",
    "place": "紐西蘭",
    "title": "紐西蘭總理宣布辭職"
  },
  {
    "date": "2016/12/6",
    "year": 2016,
    "month": 12,
    "day": 6,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "含硫量超標，西非5國禁止進口歐洲骯髒燃料"
  },
  {
    "date": "2016/12/6",
    "year": 2016,
    "month": 12,
    "day": 6,
    "area": "非洲",
    "place": "剛果民主共和國",
    "title": "剛果開賽省爆發流血衝突，釀至少31死"
  },
  {
    "date": "2016/12/6",
    "year": 2016,
    "month": 12,
    "day": 6,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西參院議長涉貪，遭法院下令去職"
  },
  {
    "date": "2016/12/6",
    "year": 2016,
    "month": 12,
    "day": 6,
    "area": "歐洲",
    "place": "法國",
    "title": "法國總理宣布請辭，全心投入明年總統大選"
  },
  {
    "date": "2016/12/6",
    "year": 2016,
    "month": 12,
    "day": 6,
    "area": "歐洲",
    "place": "英國",
    "title": "英最高法院開審英國脫歐程序上訴案"
  },
  {
    "date": "2016/12/6",
    "year": 2016,
    "month": 12,
    "day": 6,
    "area": "北美洲",
    "place": "美國",
    "title": "高爾與川普會談，就氣候變遷議題尋求共同點"
  },
  {
    "date": "2016/12/6",
    "year": 2016,
    "month": 12,
    "day": 6,
    "area": "亞洲",
    "place": "南韓",
    "title": "青瓦台：朴槿惠願明年4月提前下台"
  },
  {
    "date": "2016/12/6",
    "year": 2016,
    "month": 12,
    "day": 6,
    "area": "亞洲",
    "place": "日本",
    "title": "創日相首例，安倍將赴珍珠港悼念犧牲者"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "非洲",
    "place": "中非共和國",
    "title": "聯合國：41名維和人員涉嫌性侵中非共和國平民"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "非洲",
    "place": "迦納",
    "title": "迦納7日舉行總統大選"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "中南美洲",
    "place": "巴西",
    "title": "里約民眾反撙節示威，與警方爆發衝突"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西參院拒絕解除涉貪議長職務"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟：英國只有不到18個月時間完成脫歐協商"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "歐洲",
    "place": "法國",
    "title": "法國內政部長接任總理"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "北美洲",
    "place": "美國",
    "title": "日本軟銀總裁會晤川普，承諾在美投資500億美元"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "新任美駐菲大使向菲國總統遞交國書"
  },
  {
    "date": "2016/12/7",
    "year": 2016,
    "month": 12,
    "day": 7,
    "area": "亞洲",
    "place": "日本",
    "title": "美軍年底將歸還沖繩部分土地"
  },
  {
    "date": "2016/12/8",
    "year": 2016,
    "month": 12,
    "day": 8,
    "area": "非洲",
    "place": "肯亞",
    "title": "肯亞法院：政府蒐集感染愛滋學童資料已違憲"
  },
  {
    "date": "2016/12/8",
    "year": 2016,
    "month": 12,
    "day": 8,
    "area": "中南美洲",
    "place": "玻利維亞",
    "title": "玻利維亞就巴西足球隊空難調查航空公司"
  },
  {
    "date": "2016/12/8",
    "year": 2016,
    "month": 12,
    "day": 8,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉朝野對話破裂，國內政治危機依舊無解"
  },
  {
    "date": "2016/12/8",
    "year": 2016,
    "month": 12,
    "day": 8,
    "area": "歐洲",
    "place": "英國",
    "title": "英國國會通過動議，2017年3月底前啟動脫歐談判"
  },
  {
    "date": "2016/12/8",
    "year": 2016,
    "month": 12,
    "day": 8,
    "area": "歐洲",
    "place": "義大利",
    "title": "2017年預算案過關，義大利總理正式請辭"
  },
  {
    "date": "2016/12/8",
    "year": 2016,
    "month": 12,
    "day": 8,
    "area": "北美洲",
    "place": "加拿大",
    "title": "美國副總統拜登將訪問加拿大"
  },
  {
    "date": "2016/12/8",
    "year": 2016,
    "month": 12,
    "day": 8,
    "area": "亞洲",
    "place": "日本",
    "title": "美日防長就兩國合作交換意見"
  },
  {
    "date": "2016/12/8",
    "year": 2016,
    "month": 12,
    "day": 8,
    "area": "亞洲",
    "place": "印尼",
    "title": "印尼6/5強震造成至少97死"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "非洲",
    "place": "喀麥隆",
    "title": "喀麥隆英語區多名反政府抗議民眾遭警方擊斃"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴企業主籲川普持續改善美古關係"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西參院議長被取消總統繼位資格"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐洲央行延長購債計畫與維持零利率"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐洲議會就業委員會：CETA將使歐盟流失20萬個工作機會"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "川普提名速食連鎖集團執行長接管勞工部"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "北美洲",
    "place": "美國",
    "title": "墨西哥對美出口超越加拿大"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "亞洲",
    "place": "南韓",
    "title": "南韓國會將就朴槿惠彈劾案進行表決"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲律賓防長：可能停止協助美軍巡邏南海"
  },
  {
    "date": "2016/12/9",
    "year": 2016,
    "month": 12,
    "day": 9,
    "area": "亞洲",
    "place": "索羅門群島",
    "title": "索羅門群島外海傳規模7/7強震"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "非洲",
    "place": "迦納",
    "title": "迦納變天，在野黨領袖當選總統"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞教堂倒塌，釀至少60死"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "為打擊走私，委內瑞拉將以硬幣取代最高面額鈔票"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "諾貝爾和平獎得主籲「重新思考」反毒戰爭"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利外長接任總理，將籌組新政府"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "北美洲",
    "place": "美國",
    "title": "美國將增派200名軍事人員赴敘利亞協助打擊IS"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大聯邦政府與大部分省分簽署全國性氣候協議"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "亞洲",
    "place": "葉門",
    "title": "葉門軍營遭伊斯蘭國自殺炸彈攻擊，至少50死"
  },
  {
    "date": "2016/12/12",
    "year": 2016,
    "month": 12,
    "day": 12,
    "area": "亞洲",
    "place": "土耳其",
    "title": "庫德族激進組織宣稱犯下伊斯坦堡連環爆炸案"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "非洲",
    "place": "甘比亞",
    "title": "甘比亞總統反悔，拒絕承認敗選"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "非洲",
    "place": "奈及利亞",
    "title": "奈及利亞2女童自殺攻擊，釀1死18傷"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴與谷歌將共同提升國內網路服務"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "為打擊黑幫，委內瑞拉關閉哥倫比亞邊界72小時"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "歐洲",
    "place": "英國",
    "title": "英國上議院：政府需制定脫歐過渡協議計畫"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "歐洲",
    "place": "法國",
    "title": "涉嫌瀆職，IMF總裁出庭受審"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "美國防部證實IS領袖遭無人機擊斃"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "北美洲",
    "place": "美國",
    "title": "俄羅斯是否介入美國大選，共和黨議員擬調查"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "亞洲",
    "place": "泰國",
    "title": "新泰王登基後首度大赦10萬人"
  },
  {
    "date": "2016/12/13",
    "year": 2016,
    "month": 12,
    "day": 13,
    "area": "亞洲",
    "place": "菲律賓",
    "title": "菲恐怖組織阿布沙伊夫釋放2印尼籍人質"
  },
  {
    "date": "2016/12/14",
    "year": 2016,
    "month": 12,
    "day": 14,
    "area": "非洲",
    "place": "甘比亞",
    "title": "甘比亞總統拒絕承認敗選，風波持續延燒"
  },
  {
    "date": "2016/12/14",
    "year": 2016,
    "month": 12,
    "day": 14,
    "area": "非洲",
    "place": "埃及",
    "title": "開羅教堂爆炸釀24死，伊斯蘭國承認犯行"
  },
  {
    "date": "2016/12/14",
    "year": 2016,
    "month": 12,
    "day": 14,
    "area": "中南美洲",
    "place": "秘魯",
    "title": "秘魯公視首度播放原住民語新聞"
  },
  {
    "date": "2016/12/14",
    "year": 2016,
    "month": 12,
    "day": 14,
    "area": "中南美洲",
    "place": "巴西",
    "title": "巴西國會通過20年撙節方案"
  },
  {
    "date": "2016/12/14",
    "year": 2016,
    "month": 12,
    "day": 14,
    "area": "歐洲",
    "place": "塞爾維亞",
    "title": "塞爾維亞指控克羅埃西亞阻撓塞國入盟進程"
  },
  {
    "date": "2016/12/14",
    "year": 2016,
    "month": 12,
    "day": 14,
    "area": "亞洲",
    "place": "紐西蘭",
    "title": "紐西蘭財長接任總理一職"
  },
  {
    "date": "2016/12/14",
    "year": 2016,
    "month": 12,
    "day": 14,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞叛軍同意撤出阿勒坡"
  },
  {
    "date": "2016/12/15",
    "year": 2016,
    "month": 12,
    "day": 15,
    "area": "非洲",
    "place": "甘比亞",
    "title": "聯合國西非特使：賈梅若不下台將面臨制裁"
  },
  {
    "date": "2016/12/15",
    "year": 2016,
    "month": 12,
    "day": 15,
    "area": "中南美洲",
    "place": "墨西哥",
    "title": "墨西哥參議院將藥用大麻合法化"
  },
  {
    "date": "2016/12/15",
    "year": 2016,
    "month": 12,
    "day": 15,
    "area": "中南美洲",
    "place": "智利",
    "title": "智利前第一夫人涉貪遭調查"
  },
  {
    "date": "2016/12/15",
    "year": 2016,
    "month": 12,
    "day": 15,
    "area": "歐洲",
    "place": "義大利",
    "title": "義大利國會表決通過新政府"
  },
  {
    "date": "2016/12/15",
    "year": 2016,
    "month": 12,
    "day": 15,
    "area": "北美洲",
    "place": "美國",
    "title": "美國聯準會宣布升息1碼"
  },
  {
    "date": "2016/12/15",
    "year": 2016,
    "month": 12,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "日相安倍將與俄國總統普亭展開會談"
  },
  {
    "date": "2016/12/15",
    "year": 2016,
    "month": 12,
    "day": 15,
    "area": "亞洲",
    "place": "日本",
    "title": "日本眾議院通過賭場合法化法案"
  },
  {
    "date": "2016/12/15",
    "year": 2016,
    "month": 12,
    "day": 15,
    "area": "兩岸三地",
    "place": "中國大陸",
    "title": "美智庫：中國大陸在南海7人工島部署武器"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "非洲",
    "place": "辛巴威",
    "title": "辛巴威總統有意角逐2018年總統大選"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "非洲",
    "place": "索馬利亞",
    "title": "索馬利亞首都一檢查站附近發生爆炸攻擊，造成6人死亡"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞赦免百餘名FARC叛軍"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "中南美洲",
    "place": "古巴",
    "title": "古巴擬以蘭姆酒償還捷克債務"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟延長對俄經濟制裁至2017年中"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "歐洲",
    "place": "比利時",
    "title": "歐盟對英國脫歐協商計畫達成共識，梅伊遭冷落"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "北美洲",
    "place": "美國",
    "title": "俄網攻干預美國大選，白宮稱普亭知情"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "北美洲",
    "place": "加拿大",
    "title": "加拿大國防部長：加國將繼續參與在伊拉克的軍事行動"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "亞洲",
    "place": "敘利亞",
    "title": "敘利亞阿勒坡叛軍展開撤離行動"
  },
  {
    "date": "2016/12/16",
    "year": 2016,
    "month": 12,
    "day": 16,
    "area": "亞洲",
    "place": "日本",
    "title": "日俄召開領袖高峰會，同意恢復防衛對話"
  },
  {
    "date": "2016/12/19",
    "year": 2016,
    "month": 12,
    "day": 19,
    "area": "非洲",
    "place": "辛巴威",
    "title": "辛巴威92歲總統將代表執政黨參選2018年總統大選"
  },
  {
    "date": "2016/12/19",
    "year": 2016,
    "month": 12,
    "day": 19,
    "area": "中南美洲",
    "place": "委內瑞拉",
    "title": "委內瑞拉總統宣布延後廢鈔"
  },
  {
    "date": "2016/12/19",
    "year": 2016,
    "month": 12,
    "day": 19,
    "area": "歐洲",
    "place": "俄羅斯",
    "title": "俄羅斯軍機墜毀於西伯利亞，16人受傷"
  },
  {
    "date": "2016/12/19",
    "year": 2016,
    "month": 12,
    "day": 19,
    "area": "北美洲",
    "place": "美國",
    "title": "美國國防部：中國大陸將交還無人潛航器"
  },
  {
    "date": "2016/12/19",
    "year": 2016,
    "month": 12,
    "day": 19,
    "area": "亞洲",
    "place": "南韓",
    "title": "潘基文暗示有可能選南韓總統"
  },
  {
    "date": "2016/12/19",
    "year": 2016,
    "month": 12,
    "day": 19,
    "area": "亞洲",
    "place": "索羅門群島",
    "title": "索羅門群島外海又傳規模5/8強震"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "非洲",
    "place": "南蘇丹",
    "title": "潘基文：南蘇丹恐爆發大屠殺，安理會應實施武器禁運"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "非洲",
    "place": "剛果",
    "title": "總統任期屆滿不願交權，剛果恐爆動亂"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "中南美洲",
    "place": "哥倫比亞",
    "title": "哥倫比亞總統獲頒天主教「燈光」和平獎"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "中南美洲",
    "place": "厄瓜多",
    "title": "厄瓜多沿海發生規模5/8強震，釀2死6傷"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "歐洲",
    "place": "德國",
    "title": "貨車衝撞柏林耶誕市集，至少9死50傷"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "歐洲",
    "place": "法國",
    "title": "IMF總裁擔任法財長期間涉嫌瀆職，遭判有罪"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "北美洲",
    "place": "美國",
    "title": "川普獲得304張選舉人票，正式當選美國總統"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "亞洲",
    "place": "南韓",
    "title": "北韓駐英公使：投奔南韓是為了逃離奴役生活"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "亞洲",
    "place": "土耳其",
    "title": "俄羅斯駐土耳其大使遭槍擊身亡"
  },
  {
    "date": "2016/12/20",
    "year": 2016,
    "month": 12,
    "day": 20,
    "area": "亞洲",
    "place": "日本",
    "title": "圍堵禽流感疫情，日本與南韓再下令撲殺家禽"
  }
];

$.makeTable = function (mydata) {
    var table = $('<table>');
    var tblHeader = "<tr>";
    // tblHeader += "<th>" + "時間" + "</th>";
    tblHeader += "<th class='thDate tableHeader'>" + "年" + "</th>";
    tblHeader += "<th class='thDate tableHeader'>" + "月" + "</th>";
    tblHeader += "<th class='thDate tableHeader'>" + "日" + "</th>";
    tblHeader += "<th class='tableHeader'>" + "地區" + "</th>";
    tblHeader += "<th class='tableHeader'>" + "國家" + "</th>";
    tblHeader += "<th class='tableHeader'>" + "標題" + "</th>";
    // for (var k in mydata[0]) tblHeader += "<th>" + k + "</th>";
    tblHeader += "</tr>";
    $(tblHeader).appendTo(table);
    $.each(mydata, function (index, value) {
        var TableRow = "<tr class='tableHover'>";
        $.each(value, function (key, val) {
            if(key != "date"){
              if(key == "year"){
                TableRow += "<td style='width:50px'>" + val + "</td>";
              }
              else if(key == "month"){
                TableRow += "<td style='width:50px'>" + val + "</td>";
              }
              else if(key == "day"){
                TableRow += "<td style='width:50px'>" + val + "</td>";
              }
              else if(key == "area"){
                TableRow += "<td style='width:100px'>" + val + "</td>";
              }
              else if(key == "place"){
                TableRow += "<td style='width:150px'>" + val + "</td>";
              }
              else if(key == "title"){
                TableRow += "<td style='width:460px;text-align:left;padding-left:30px'>" + val + "</td>";
              }
            }
        });
        TableRow += "</tr>";
        $(table).append(TableRow);
    });
    return ($(table));
};

var mydata = eval(jdata);
var table = $.makeTable(mydata);
$(table).appendTo("#myTable");
