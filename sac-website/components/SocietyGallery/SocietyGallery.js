import React from "react";
import { socGalleryData } from "./socGalleryData";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SocietyGallery({ title }) {
  const inno = [
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092350/inno/315849203_683489313339629_2455763644366460721_n_t2obny.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092349/inno/315893045_684062899948937_4952886203097984759_n_lpuljp.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092348/inno/315878086_683465460008681_470484218572244043_n_eq93jn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679144161/inno/IMG_9938_ouipmm.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092348/inno/315892003_683487873339773_5476925140535560374_n_p48sqz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092348/inno/315867882_683464376675456_8471421737752891778_n_zhw7iu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092348/inno/315801668_683489146672979_2852974555673267155_n_padzos.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092348/inno/315884629_683464330008794_4896556460539060665_n_ysmt7x.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679096943/inno/13086666_1012605502151461_3925938832757056176_o_ozfajy.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092347/inno/315879786_683463880008839_4024956436501787584_n_wllnat.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092347/inno/315847461_683464590008768_2361462879507187579_n_y9b5kj.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092347/inno/315856740_683464423342118_2041003024396756765_n_dyzkhj.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092347/inno/315747183_683464956675398_4736293116591988190_n_qk86ik.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092346/inno/315722437_683465106675383_1328129438635095592_n_piyuw8.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092346/inno/315704007_683465366675357_7782592060108530717_n_xjo9n7.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092346/inno/315747918_683488930006334_826626599753314158_n_i6et9a.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092346/inno/315769370_683466470008580_4666538054288297478_n_ldjs0n.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092344/inno/315713213_683488583339702_4597395922957893521_n_k7qo2t.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679096943/inno/13116038_1012604982151513_4038023389832667068_o_c657xw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092344/inno/315710854_683465026675391_2116365766081638407_n_kjrqeu.jpg",
      },

      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092343/inno/315637702_681033130251914_8403199372963416692_n_zebmoe.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679144166/inno/IMG_4732_mmvg5o.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092343/inno/315713213_683488583339702_4597395922957893521_n_1_fjrhgp.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092343/inno/315530784_681033173585243_6451922980167457976_n_skwxsz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092342/inno/315525679_681032923585268_8051031146013522430_n_slzmks.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092342/inno/315696878_683488323339728_2316976895124832065_n_z8zmbw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092341/inno/315614924_681033376918556_1291301528899642548_n_s7ibzn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092341/inno/315535613_681033440251883_2440261906752101605_n_fgmxfn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092341/inno/315313202_681032976918596_6399088559737977666_n_bfmyhh.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092340/inno/315332868_681033183585242_6499822283628480337_n_be1dra.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092340/inno/315535985_681033286918565_7721410103510344539_n_qwmkkr.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092340/inno/315472751_681033226918571_2743477781909159460_n_tri1mo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092340/inno/315456076_681033066918587_3149755097159515307_n_nrelbm.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092339/inno/315446813_681033960251831_8321392885205706925_n_i5vupv.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092339/inno/315423395_681186676903226_7784268543788087473_n_otjdim.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092339/inno/75456942_2569960329749296_8399239259533344768_n_kvnxfl.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092337/inno/75362282_2574113392667323_8164834560291373056_n_cfcspe.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092338/inno/76762535_2574362015975794_8206879433965961216_n_lhtqte.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092338/inno/315439427_681033600251867_2004407477607323437_n_phltx6.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092338/inno/75534262_2574363752642287_3561131859570065408_n_nhiach.jpg",
      },

      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679096943/inno/13131363_1012604552151556_866511025157889187_o_wid9gi.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092337/inno/75204496_2569962683082394_931077639085490176_n_fj6kpz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092337/inno/75210691_2574366819308647_4498087870069735424_n_i0obin.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092337/inno/74680816_2569965773082085_3066309201383915520_n_hzqqjb.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092337/inno/75199770_2569959319749397_9170295453781065728_n_kf3nib.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092337/inno/74601223_2574361862642476_2683581586145804288_n_scgjxw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092336/inno/74664562_2574441509301178_4125504413533995008_n_aqmnir.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679144170/inno/IMG_4730_crws4v.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092336/inno/74634348_2574362862642376_4931949845515599872_n_hsqgwi.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092336/inno/74614908_2574113759333953_2974278068094369792_n_sowlub.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092336/inno/74270605_2574114136000582_5384436122006847488_n_kcwgie.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092336/inno/74604689_2574443755967620_1852697704350613504_n_deuega.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092335/inno/73357413_2574366542642008_2705553393291624448_n_bid1un.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092335/inno/74532297_2574363322642330_1715358248090992640_n_vnalww.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092335/inno/74214515_2574362329309096_1284408994911223808_n_kqk3o8.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092339/inno/76751625_2569980353080627_1796883148345180160_n_kp5kff.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092335/inno/74286308_2574444569300872_6333703518821548032_n_nb3bbz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092335/inno/73495213_2574363189309010_5035485486794145792_n_c2ekpz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092334/inno/74186175_2569998826412113_5964516457998974976_n_ydwswu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092334/inno/73230965_2574113879333941_5643529976893407232_n_upzczf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092334/inno/73381337_2569971523081510_8962361368128782336_n_kehrel.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092334/inno/315988862_683489316672962_5572372265055268088_n_tmyajv.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092334/inno/73180604_2574118706000125_2134480058985742336_n_q9s9bf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092334/inno/315997594_683465303342030_2756994823352633936_n_k9fser.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092333/inno/73133588_2574362759309053_3744700862040113152_n_olg6jf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679144181/inno/IMG_4778_zclpst.jpg",
      },

      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092333/inno/315896692_683465240008703_8992531063539606244_n_xsfrnp.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092332/inno/315944218_683464990008728_7033049455942325088_n_fwrvuo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092332/inno/315911803_683489420006285_2204050442118049139_n_l6rbmk.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679096943/inno/13087202_1012605982151413_6805497576699159677_o_yi79tg.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092332/inno/315966806_683464320008795_7309551145883022776_n_fmjo0o.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092331/inno/72725049_2570007463077916_5305365224331673600_n_a0ioue.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092331/inno/315944295_683489136672980_8046188745263207622_n_acqity.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092331/inno/69616856_2574112922667370_1246353961171025920_n_axcnkn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092331/inno/315921403_683466393341921_4667261583069703179_n_ntb1hv.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679092344/inno/315747901_683489176672976_2672627294657136511_n_oyjzwv.jpg",
      },
    ],
  ];

  const vriddhi = [
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091167/vriddhi/313422798_672173934471167_5353053668397946669_n_lhwmhi.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091166/vriddhi/313418078_672175431137684_5900774485456394325_n_rwqxgg.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091165/vriddhi/313411703_672174914471069_6302380422973422220_n_f5yfls.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091165/vriddhi/313424111_672175257804368_7881532493826153972_n_wccdhs.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091158/vriddhi/312102125_672171641138063_5309344069083887058_n_tw1def.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091164/vriddhi/313408142_672173191137908_179030676535292571_n_ubcjzt.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157723/vriddhi/313422753_672174467804447_5162652236522863359_n_xk3t0r.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157722/vriddhi/313404605_671997677822126_451215508336704523_n_mdyxaa.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157721/vriddhi/313044271_672174161137811_8890515530658781753_n_ncubkn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157721/vriddhi/312441715_672174654471095_7249990298566090686_n_xnyqim.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157725/vriddhi/313911139_671997661155461_5014518808981045190_n_ryl8sw.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091164/vriddhi/313399530_672174211137806_2473869583321684998_n_to56ov.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091163/vriddhi/313403193_672174527804441_7274455991694940856_n_e3hchw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091163/vriddhi/313424794_672171791138048_6886697182539795023_n_bmwghs.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091163/vriddhi/313403088_672171731138054_9042922834694879676_n_q7kkvf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091163/vriddhi/313289110_672174317804462_6795470829156283861_n_zmsou3.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091162/vriddhi/313197698_672174074471153_4378366643355888254_n_fjkne8.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157724/vriddhi/313424794_672171791138048_6886697182539795023_n_m2r8kk.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157723/vriddhi/313410270_671997594488801_3596713117820623674_n_o0xiyl.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157723/vriddhi/312827115_672175041137723_9081006197337464758_n_oplvaa.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157723/vriddhi/313417829_672172467804647_4353764114949922526_n_fqs3vx.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091162/vriddhi/313401932_672173041137923_522549174449123500_n_b3npgw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091162/vriddhi/313024386_672173421137885_7136640522933722263_n_jmmngp.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091161/vriddhi/312602213_672171984471362_4281868766757993968_n_xchzw4.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091161/vriddhi/312854926_672175327804361_2878057346240350250_n_rusige.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091161/vriddhi/312584579_672171814471379_7322028413057662395_n_nkbysf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091160/vriddhi/312973198_672172581137969_4507714073766461437_n_yhk8y6.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157724/vriddhi/313095357_672174614471099_4145713513787363523_n_fwk7tr.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157724/vriddhi/313864538_671997287822165_201024389537232358_n_sirefw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157724/vriddhi/313432236_672173117804582_7024212511325160884_n_kcezuq.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157724/vriddhi/313430123_671997351155492_5007465832496389451_n_dheokd.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091160/vriddhi/312732078_672174011137826_5531301563542471114_n_iuddbe.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091159/vriddhi/312450734_672173554471205_6054888641551007980_n_j2x34i.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091159/vriddhi/312246343_672173147804579_6451606475779725250_n_ep8tn5.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091159/vriddhi/312718058_672172674471293_1696850733940554492_n_vrgkij.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091165/vriddhi/313400229_672172837804610_3151279488061510126_n_oy6ofz.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679091157/vriddhi/312662629_672174694471091_7171453292840865027_n_j5blxv.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157727/vriddhi/312729011_672175087804385_4047438316211949665_n_ahqg1r.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157726/vriddhi/313868507_671997214488839_3617804381210295125_n_bggqwe.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679157726/vriddhi/313437391_671997934488767_869851903035814174_n_k0yebb.jpg",
      },
    ],
  ];

  const nitrutsav = [
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099006/NU/51589913_2093169594095041_7199133806853357568_n_uezrcu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/raw/upload/f_auto,q_70/v1679099007/NU/Facebook_bfb7ef.html",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099001/NU/51256891_2093166910761976_75893631193448448_n_itnq0q.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099000/NU/51195295_2096497770428890_9089177789440983040_n_g4kvda.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099001/NU/51225901_2094819457263388_8927640569040076800_n_cwngj1.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099005/NU/51571725_2096511093760891_5651126429715267584_n_s2is55.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099001/NU/51182274_2094964613915539_8777619706442940416_n_jdevgo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099001/NU/51182274_2094964613915539_8777619706442940416_n_jdevgo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099006/NU/51747373_2096499683762032_2167877621600223232_n_jjkxzu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099006/NU/51432675_2096532460425421_4154685112832753664_n_hzbr4n.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099005/NU/51454892_2093153114096689_1919240448711327744_n_sbkdzu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099006/NU/51736376_2096508613761139_5638085118003249152_n_xosv0u.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099000/NU/51182329_2093148947430439_6607723179630657536_n_mafpui.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099000/NU/51165110_2096511913760809_7717336630616391680_n_qe7l7x.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098996/NU/27628554_1613945578684114_1069160744013059703_o_yyvfrm.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098995/NU/12697416_959552314123447_271301524805459606_o_plh9se.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099004/NU/51396432_2094871717258162_8694953143751933952_n_kxliiy.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099005/NU/51419539_2094908600587807_7310648483755589632_n_fketfq.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099001/NU/51229503_2096535050425162_6578817830685245440_n_x745de.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099001/NU/51216234_2093180560760611_3100996448188104704_n_gqeqtd.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099000/NU/51148718_2093185230760144_4348090269015474176_n_glyfhu.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099000/NU/51195284_2094819347263399_688610023508541440_n_kor6vj.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099001/NU/51223881_2093148237430510_4603312352618610688_n_hpoirt.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099000/NU/51130338_2094919487253385_3504535344638853120_n_lnz8yr.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098999/NU/51155594_2094842997261034_3199324604829007872_n_zeb8jl.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098995/NU/27624932_1611880592223946_6866416980895742212_o_gbeyfs.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098996/NU/27710137_1611879835557355_2882900380471636708_o_icxzax.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098999/NU/51150939_2093168960761771_5624174964472020992_n_obbp7y.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098999/NU/51161420_2094826593929341_732349618263687168_n_nwpbdn.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099005/NU/51398392_2096507083761292_3450537396590870528_n_axbslk.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098996/NU/27709794_1611878955557443_6627738335957124995_o_gjjjhf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098996/NU/50722882_2094903827254951_5967876415209603072_n_tiv6yj.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099006/NU/51632682_2096513963760604_1601628407446110208_n_toutni.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099006/NU/51548039_2093156224096378_513189132344754176_n_sodjdt.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098996/NU/50722882_2094903827254951_5967876415209603072_n_tiv6yj.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099004/NU/51407856_2094914323920568_6611552804400005120_n_cfeoph.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099002/NU/51255417_2096515253760475_5282916392348155904_n_danm5v.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098998/NU/51116851_2094944547250879_1571150915786768384_n_ynka9r.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099004/NU/51410416_2094824757262858_7722857123880632320_n_cuyoj8.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099003/NU/51341360_2096515237093810_4399430791948402688_n_wgxp8e.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098999/NU/51099741_2093184824093518_6386600872909996032_n_qvaijd.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099003/NU/51322694_2096523953759605_5009165106865504256_n_tvt8nf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099004/NU/51378864_2094829667262367_867683453645094912_n_qimgek.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099002/NU/51304443_2093166834095317_1913206921603579904_n_ned4f3.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099003/NU/51332191_2094847130593954_267750254097465344_n_dk8u65.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099003/NU/51311760_2094832900595377_5714400764093267968_n_nhut5p.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098999/NU/51078333_2094823220596345_7666022044990963712_n_dmnbml.jpg",
      },

      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098994/NU/12322770_959552154123463_3001590398154171492_o_bp3nzw.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098994/NU/12698619_959552324123446_4119107086167710078_o_eoje6m.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098994/NU/10452288_783544371724243_7922302608742229627_n_ce7fvc.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098994/NU/27356347_1611881332223872_4270725272517020689_o_ut3byo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098995/NU/27747347_1613942962017709_5376340625239112282_o_hfcrfg.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098999/NU/51078333_2094823220596345_7666022044990963712_n_dmnbml.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099003/NU/51357581_2094830900595577_5159491217083334656_n_pf4jcc.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099002/NU/51294581_2093152820763385_7974332986684342272_n_rftkcf.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099003/NU/51348128_2093153044096696_3216265639471611904_n_juawox.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098997/NU/50956338_2093154100763257_3026013959946764288_n_pspqzr.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099002/NU/51283529_2094821883929812_8931040486626426880_n_v9apsy.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098998/NU/51032882_2093358740742793_6856990604610502656_n_dvrsus.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098999/NU/51126602_2093149164097084_728291741752360960_n_fnlm3h.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098998/NU/51064576_2094827780595889_3641650079619612672_n_ypduhl.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098997/NU/51047923_2093169790761688_4770754620475572224_n_az8jak.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098998/NU/51095758_2094896880588979_4435188086904717312_n_uasy8q.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099002/NU/51308443_2094821553929845_2283925541994102784_n_plkyeo.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679099001/NU/51276846_2093151327430201_6207138795477794816_n_q9vvjb.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098997/NU/50979333_2093169470761720_2584440327771258880_n_jyrmaa.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098997/NU/50970811_2094826857262648_8427422525692051456_n_rxsq0a.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098997/NU/50966680_2093191084092892_5146709626338672640_n_tdkxao.jpg",
      },
      {
        img: "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679098996/NU/27788591_1613945458684126_8855358071648154556_o_kfd3lh.jpg",
      },
    ],
  ];

  const cosmo = [
    [
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-1.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-10.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-11.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-12.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-2.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-3.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-4.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-5.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-6.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-8.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMO-9.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMOC-1.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMOC-2.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMOC-3.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMOC-4.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMOC-5.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMOC-6.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSMOC-7.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0016.jpg",
      },
    ],
    [
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0019.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0024.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0037.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0037.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0042.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0054.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0054.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0061.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0061.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0089.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0099.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0106.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0136.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0136.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0142.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0257.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_CSM_0302.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0004.jpg",
      },
    ],
    [
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0020.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0023.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0024.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0026.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0035.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0048.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0051.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0068.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0114.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0116.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0123.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0128.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0132.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0141.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0147.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0148.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0153.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0161.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0162.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_Picsart_23-01-20_00-11-55-388.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0536.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0550.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0653.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0654.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0668.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0675.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0678.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0680.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer__MG_0739.jpg",
      },
    ],
    [
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_DSC_0163.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_0627.jpg",
      },

      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_0679.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_0715.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_0774.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_8672.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_8684.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_8791.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_8822.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_8822.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_8999.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9025.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9103.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9123.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9155.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9157.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9160.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9186.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9215.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9335.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9382.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9456.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_IMG_9506.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0468.jpg",
      }, {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0478.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0545.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0557.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0559.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0564.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0582.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0642.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0740.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_NYX_0761.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_Picsart_23-01-20_00-03-19-760.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_Picsart_23-01-20_00-05-25-724.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Cosmo/jpeg-optimizer_Picsart_23-01-20_00-08-50-292.jpg",
      },
    ],
  ];


  const asme = [
    [
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932648/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.48_mwqnvx.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932648/Pictures%20for%20SAC/2_dnbsi1.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932645/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.47_k3trbn.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932645/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.49_ioaga4.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932645/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.500_jhfitz.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932643/Pictures%20for%20SAC/3_gcihgk.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932640/Pictures%20for%20SAC/5_mo4ryp.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932638/Pictures%20for%20SAC/7_atzd52.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932638/Pictures%20for%20SAC/6_bolblq.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932645/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.50_dplmmi.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932643/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.591_sib2et.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932643/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.592_usvl6o.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932643/Pictures%20for%20SAC/4_wlbhh0.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932643/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.25.00_cfdvkd.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932645/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.51_nb6tsa.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932644/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.511_ejgvmy.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932644/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.58_vih2n5.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/f_auto,q_70/v1694932644/Pictures%20for%20SAC/WhatsApp_Image_2023-09-01_at_17.24.584_haefmu.jpg",
      },
    ],
  ];
  const aiche = [
    [
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654682/WhatsApp_Image_2023-09-03_at_1.30.53_PM_ntsceq.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654681/WhatsApp_Image_2023-09-03_at_1.30.51_PM_uj2nxb.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654681/WhatsApp_Image_2023-09-03_at_1.30.48_PM_n5jydd.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654685/WhatsApp_Image_2023-09-03_at_1.30.55_PM_arh2pm.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654684/WhatsApp_Image_2023-09-03_at_1.30.55_PM_1_qnoebs.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654680/WhatsApp_Image_2023-09-03_at_1.30.50_PM_w0mso7.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654687/WhatsApp_Image_2023-09-03_at_1.37.43_PM_g6f8qs.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654686/WhatsApp_Image_2023-09-03_at_1.30.57_PM_bwned7.jpg",
      },
    ],
    [
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654684/WhatsApp_Image_2023-09-03_at_1.30.55_PM_1_qnoebs.jpg",
      },
      {
        img: "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697654683/WhatsApp_Image_2023-09-03_at_1.30.54_PM_ueqfll.jpg",
      },
    ],
  ];


  const udaan = [
    [
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%201000004670.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%2020230118_181742.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20Copy%20of%20IMG-20230718-WA0009.jpg",
      },

    ],
    [{
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20Copy%20of%20IMG20230716151507.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20IMG-20230317-WA0022.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20IMG-20230627-WA0064.jpg",
    },
    ],
    [{
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20IMG-20230725-WA0017.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20IMG_20221114_150439.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20IMG_20230117_185302.jpg",
    },
    ],
    [
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20UDN1.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20UDN8.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/udaan/jpeg-optimizer_Copy%20of%20WhatsApp%20Image%202022-11-16%20at%2011.41.41%20AM.jpeg",
      },

    ],

  ];

  const rotaract = [
    [
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_20221030_170833.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG20220810103604.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG20220815095635.jpg",
      },

    ],
    [{
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG20220815095945.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG20221113152108.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG20221114132243.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG_20230408_103512483.jpg",
    },
    ],
    [{
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG_20230408_104419.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG_20230408_105800175.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG_20230830_122954.jpg",
    },
    ],
    [{
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG_20230830_124440.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_IMG_20230830_215104.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/rotaract-images/jpeg-optimizer_Screenshot%202023-09-03%20220529.png",
    },

    ],
  ];

  const shortCurcuit = [
    [
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/shortcircuit/jpeg-optimizer_1693650915483.jpg",
      },
      {
        img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/shortcircuit/jpeg-optimizer_1693650964831.jpg",
      },

    ],
    [{
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/shortcircuit/jpeg-optimizer_1693651049493.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/shortcircuit/jpeg-optimizer_1693651049499.jpg",
    },
    ],
    [{
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/shortcircuit/jpeg-optimizer_1693651209228.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/shortcircuit/jpeg-optimizer_1693651291112.jpg",
    },
    ],
    [{
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/shortcircuit/jpeg-optimizer__storage_emulated_0_MIUI_Gallery_cloud_.cache_.share_.securityshare_temp_files_1693651291106.jpg",
    },
    {
      img: "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/Club%20Facad/shortcircuit/jpeg-optimizer_1693651209228.jpg",
    },
    ],
  ]
  let data1 = inno;

  if (title === "Technical Society") {
    title = "Innovision";
    data1 = inno;
  } else if (title === "Film and Music Society") {
    title = "Cosmo";
    data1 = cosmo;
  } else if (title === "Literary and Cultural Society") {
    title = "Nitrutsav";
    data1 = nitrutsav;
  } else if (title === "Games and Sports Society") {
    title = "Vriddhi";
    data1 = vriddhi;
  } else if (title == "ASME") {
    title = "";
    data1 = asme;
  } else if (title == "AICHE") {
    title = "";
    data1 = aiche;
  }
  else if (title == "UDAAN") {
    title = "";
    data1 = udaan;
  } else if (title == "ROTRACT") {
    title = "";
    data1 = rotaract;
  } else if (title == "SHORTCURCUIT") {
    title = "";
    data1 = shortCurcuit;
  } else {
    title = "";
    data1 = socGalleryData;
  }

  return (
    <>
      <div className="s-gallery-container">
        <div className="society-name">
          <h1 className="s-name">{title}</h1>
        </div>
        <div className="society-gallery-container">
          <div className="container">
            <div className=" box">
              <div className="dream">
                {data1[0].map((e) => {
                  return (
                    <>
                      <LazyLoadImage src={e.img} alt="" />
                      {/* <img src={e.img} alt="" /> */}
                    </>
                  );
                })}
              </div>

              {/* Section 2 */}
              <div className="dream ">
                {data1[1].map((e) => {
                  return (
                    <>
                      <LazyLoadImage src={e.img} alt="" />
                      {/* <img src={e.img} alt="" /> */}
                    </>
                  );
                })}
              </div>

              {/* Section 3 */}
              <div className="dream ">
                {data1[2].map((e) => {
                  return (
                    <>
                      <LazyLoadImage src={e.img} alt="" />
                      {/* <img src={e.img} alt="" /> */}
                    </>
                  );
                })}
              </div>

              {/* Section 4 */}
              <div className="dream ">
                {data1[3].map((e) => {
                  return (
                    <>
                      <LazyLoadImage src={e.img} alt="" />
                      {/* <img src={e.img} alt="" /> */}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="end-line"></div>
      </div>
    </>
  );
}
