type Theme = {
  accentBackground: string;
  accentColor: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(0, 0%, 14%, 1)',
  'hsla(0, 0%, 33%, 1)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  'hsla(0, 0%, 100%, 0)',
  'hsla(0, 0%, 100%, 0.25)',
  'hsla(0, 0%, 100%, 0.5)',
  'hsla(0, 0%, 100%, 0.75)',
  'hsla(0, 0%, 100%, 1)',
  'hsla(0, 0%, 97%, 1)',
  'hsla(0, 0%, 96%, 1)',
  'hsla(0, 0%, 94%, 1)',
  'hsla(0, 0%, 92%, 1)',
  'hsla(0, 0%, 90%, 1)',
  'hsla(0, 0%, 89%, 1)',
  'hsla(0, 0%, 81%, 1)',
  'hsla(0, 0%, 56%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(0, 0%, 42%, 1)',
  'hsla(0, 0%, 9%, 1)',
  'hsla(0, 0%, 9%, 0)',
  'hsla(0, 0%, 9%, 0.25)',
  'hsla(0, 0%, 9%, 0.5)',
  'hsla(0, 0%, 9%, 0.75)',
  'hsl(206, 100%, 99.2%)',
  'hsl(210, 100%, 98.0%)',
  'hsl(209, 100%, 96.5%)',
  'hsl(210, 98.8%, 94.0%)',
  'hsl(209, 95.0%, 90.1%)',
  'hsl(209, 81.2%, 84.5%)',
  'hsl(208, 77.5%, 76.9%)',
  'hsl(206, 81.9%, 65.3%)',
  'hsl(206, 100%, 50.0%)',
  'hsl(208, 100%, 47.3%)',
  'hsl(211, 100%, 43.2%)',
  'hsl(211, 100%, 15.0%)',
  'hsl(0, 0%, 99.0%)',
  'hsl(0, 0%, 97.3%)',
  'hsl(0, 0%, 95.1%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 90.9%)',
  'hsl(0, 0%, 88.7%)',
  'hsl(0, 0%, 85.8%)',
  'hsl(0, 0%, 78.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 52.3%)',
  'hsl(0, 0%, 43.5%)',
  'hsl(0, 0%, 9.0%)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsl(322, 100%, 99.4%)',
  'hsl(323, 100%, 98.4%)',
  'hsl(323, 86.3%, 96.5%)',
  'hsl(323, 78.7%, 94.2%)',
  'hsl(323, 72.2%, 91.1%)',
  'hsl(323, 66.3%, 86.6%)',
  'hsl(323, 62.0%, 80.1%)',
  'hsl(323, 60.3%, 72.4%)',
  'hsl(322, 65.0%, 54.5%)',
  'hsl(322, 63.9%, 50.7%)',
  'hsl(322, 75.0%, 46.0%)',
  'hsl(320, 70.0%, 13.5%)',
  'hsl(280, 65.0%, 99.4%)',
  'hsl(276, 100%, 99.0%)',
  'hsl(276, 83.1%, 97.0%)',
  'hsl(275, 76.4%, 94.7%)',
  'hsl(275, 70.8%, 91.8%)',
  'hsl(274, 65.4%, 87.8%)',
  'hsl(273, 61.0%, 81.7%)',
  'hsl(272, 60.0%, 73.5%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 46.8%, 50.3%)',
  'hsl(272, 50.0%, 45.8%)',
  'hsl(272, 66.0%, 16.0%)',
  'hsl(359, 100%, 99.4%)',
  'hsl(359, 100%, 98.6%)',
  'hsl(360, 100%, 96.8%)',
  'hsl(360, 97.9%, 94.8%)',
  'hsl(360, 90.2%, 91.9%)',
  'hsl(360, 81.7%, 87.8%)',
  'hsl(359, 74.2%, 81.7%)',
  'hsl(359, 69.5%, 74.3%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 69.4%, 55.2%)',
  'hsl(358, 65.0%, 48.7%)',
  'hsl(354, 50.0%, 14.6%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(0, 0%, 2%, 0)',
  'hsla(0, 0%, 2%, 0.25)',
  'hsla(0, 0%, 2%, 0.5)',
  'hsla(0, 0%, 2%, 0.75)',
  'hsla(0, 0%, 2%, 1)',
  'hsla(0, 0%, 8%, 1)',
  'hsla(0, 0%, 10%, 1)',
  'hsla(0, 0%, 16%, 1)',
  'hsla(0, 0%, 20%, 1)',
  'hsla(0, 0%, 26%, 1)',
  'hsla(0, 0%, 29%, 1)',
  'hsla(0, 0%, 38%, 1)',
  'hsla(0, 0%, 65%, 1)',
  'hsl(212, 35.0%, 9.2%)',
  'hsl(216, 50.0%, 11.8%)',
  'hsl(214, 59.4%, 15.3%)',
  'hsl(214, 65.8%, 17.9%)',
  'hsl(213, 71.2%, 20.2%)',
  'hsl(212, 77.4%, 23.1%)',
  'hsl(211, 85.1%, 27.4%)',
  'hsl(211, 89.7%, 34.1%)',
  'hsl(209, 100%, 60.6%)',
  'hsl(210, 100%, 66.1%)',
  'hsl(206, 98.0%, 95.8%)',
  'hsl(0, 0%, 8.5%)',
  'hsl(0, 0%, 11.0%)',
  'hsl(0, 0%, 13.6%)',
  'hsl(0, 0%, 15.8%)',
  'hsl(0, 0%, 17.9%)',
  'hsl(0, 0%, 20.5%)',
  'hsl(0, 0%, 24.3%)',
  'hsl(0, 0%, 31.2%)',
  'hsl(0, 0%, 43.9%)',
  'hsl(0, 0%, 49.4%)',
  'hsl(0, 0%, 62.8%)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsl(318, 25.0%, 9.6%)',
  'hsl(319, 32.2%, 11.6%)',
  'hsl(319, 41.0%, 16.0%)',
  'hsl(320, 45.4%, 18.7%)',
  'hsl(320, 49.0%, 21.1%)',
  'hsl(321, 53.6%, 24.4%)',
  'hsl(321, 61.1%, 29.7%)',
  'hsl(322, 74.9%, 37.5%)',
  'hsl(323, 72.8%, 59.2%)',
  'hsl(325, 90.0%, 66.4%)',
  'hsl(322, 90.0%, 95.8%)',
  'hsl(284, 20.0%, 9.6%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(279, 75.0%, 95.7%)',
  'hsl(353, 23.0%, 9.8%)',
  'hsl(357, 34.4%, 12.0%)',
  'hsl(356, 43.4%, 16.4%)',
  'hsl(356, 47.6%, 19.2%)',
  'hsl(356, 51.1%, 21.9%)',
  'hsl(356, 55.2%, 25.9%)',
  'hsl(357, 60.2%, 31.8%)',
  'hsl(358, 65.0%, 40.4%)',
  'hsl(358, 85.3%, 64.0%)',
  'hsl(358, 100%, 69.5%)',
  'hsl(351, 89.0%, 96.0%)',
  'hsl(45, 100%, 5.5%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(53, 100%, 91.0%)',
  'hsla(0, 0%, 99%, 0)',
  'hsla(0, 0%, 99%, 0.25)',
  'hsla(0, 0%, 99%, 0.5)',
  'hsla(0, 0%, 99%, 0.75)',
  'hsla(0, 0%, 99%, 1)',
  'hsla(0, 0%, 95%, 1)',
  'hsla(0, 0%, 93%, 1)',
  'hsla(0, 0%, 91%, 1)',
  'hsla(0, 0%, 86%, 1)',
  'hsla(0, 0%, 78%, 1)',
  'hsla(0, 0%, 52%, 1)',
  'hsla(0, 0%, 44%, 1)',
  'hsla(216, 100%, 99%, 0)',
  'hsla(216, 100%, 99%, 0.25)',
  'hsla(216, 100%, 99%, 0.5)',
  'hsla(216, 100%, 99%, 0.75)',
  'hsla(210, 100%, 99%, 1)',
  'hsla(210, 100%, 98%, 1)',
  'hsla(210, 100%, 96%, 1)',
  'hsla(210, 100%, 94%, 1)',
  'hsla(209, 96%, 90%, 1)',
  'hsla(209, 82%, 85%, 1)',
  'hsla(208, 78%, 77%, 1)',
  'hsla(206, 82%, 65%, 1)',
  'hsla(206, 100%, 50%, 1)',
  'hsla(208, 100%, 47%, 1)',
  'hsla(211, 100%, 43%, 1)',
  'hsla(211, 100%, 15%, 1)',
  'hsla(211, 100%, 15%, 0)',
  'hsla(211, 100%, 15%, 0.25)',
  'hsla(211, 100%, 15%, 0.5)',
  'hsla(211, 100%, 15%, 0.75)',
  'hsla(20, 60%, 99%, 0)',
  'hsla(20, 60%, 99%, 0.25)',
  'hsla(20, 60%, 99%, 0.5)',
  'hsla(20, 60%, 99%, 0.75)',
  'hsla(20, 60%, 99%, 1)',
  'hsla(24, 83%, 98%, 1)',
  'hsla(25, 100%, 95%, 1)',
  'hsla(25, 100%, 92%, 1)',
  'hsla(25, 100%, 88%, 1)',
  'hsla(25, 100%, 83%, 1)',
  'hsla(24, 100%, 75%, 1)',
  'hsla(24, 95%, 64%, 1)',
  'hsla(24, 94%, 50%, 1)',
  'hsla(24, 100%, 46%, 1)',
  'hsla(24, 100%, 37%, 1)',
  'hsla(15, 60%, 17%, 1)',
  'hsla(15, 60%, 17%, 0)',
  'hsla(15, 60%, 17%, 0.25)',
  'hsla(15, 60%, 17%, 0.5)',
  'hsla(15, 60%, 17%, 0.75)',
  'hsla(0, 100%, 99%, 0)',
  'hsla(0, 100%, 99%, 0.25)',
  'hsla(0, 100%, 99%, 0.5)',
  'hsla(0, 100%, 99%, 0.75)',
  'hsla(0, 100%, 99%, 1)',
  'hsla(0, 100%, 97%, 1)',
  'hsla(0, 100%, 95%, 1)',
  'hsla(0, 90%, 92%, 1)',
  'hsla(0, 81%, 88%, 1)',
  'hsla(359, 74%, 82%, 1)',
  'hsla(359, 69%, 74%, 1)',
  'hsla(358, 75%, 59%, 1)',
  'hsla(358, 69%, 55%, 1)',
  'hsla(358, 65%, 49%, 1)',
  'hsla(355, 49%, 15%, 1)',
  'hsla(355, 48%, 15%, 0)',
  'hsla(355, 48%, 15%, 0.25)',
  'hsla(355, 48%, 15%, 0.5)',
  'hsla(355, 48%, 15%, 0.75)',
  'hsla(60, 45%, 98%, 0)',
  'hsla(60, 45%, 98%, 0.25)',
  'hsla(60, 45%, 98%, 0.5)',
  'hsla(60, 45%, 98%, 0.75)',
  'hsla(60, 50%, 98%, 1)',
  'hsla(52, 100%, 95%, 1)',
  'hsla(55, 100%, 91%, 1)',
  'hsla(54, 100%, 87%, 1)',
  'hsla(52, 98%, 82%, 1)',
  'hsla(50, 90%, 76%, 1)',
  'hsla(47, 80%, 68%, 1)',
  'hsla(48, 100%, 46%, 1)',
  'hsla(53, 92%, 50%, 1)',
  'hsla(50, 100%, 48%, 1)',
  'hsla(42, 100%, 29%, 1)',
  'hsla(41, 56%, 13%, 1)',
  'hsla(41, 55%, 13%, 0)',
  'hsla(41, 55%, 13%, 0.25)',
  'hsla(41, 55%, 13%, 0.5)',
  'hsla(41, 55%, 13%, 0.75)',
  'hsla(140, 60%, 99%, 0)',
  'hsla(140, 60%, 99%, 0.25)',
  'hsla(140, 60%, 99%, 0.5)',
  'hsla(140, 60%, 99%, 0.75)',
  'hsla(140, 60%, 99%, 1)',
  'hsla(138, 63%, 97%, 1)',
  'hsla(139, 57%, 95%, 1)',
  'hsla(139, 48%, 91%, 1)',
  'hsla(141, 44%, 86%, 1)',
  'hsla(142, 40%, 79%, 1)',
  'hsla(146, 38%, 69%, 1)',
  'hsla(151, 40%, 54%, 1)',
  'hsla(151, 55%, 42%, 1)',
  'hsla(152, 57%, 38%, 1)',
  'hsla(153, 67%, 28%, 1)',
  'hsla(155, 41%, 14%, 1)',
  'hsla(155, 41%, 14%, 0)',
  'hsla(155, 41%, 14%, 0.25)',
  'hsla(155, 41%, 14%, 0.5)',
  'hsla(155, 41%, 14%, 0.75)',
  'hsla(300, 60%, 99%, 0)',
  'hsla(300, 60%, 99%, 0.25)',
  'hsla(300, 60%, 99%, 0.5)',
  'hsla(300, 60%, 99%, 0.75)',
  'hsla(300, 50%, 99%, 1)',
  'hsla(276, 100%, 99%, 1)',
  'hsla(277, 87%, 97%, 1)',
  'hsla(274, 78%, 95%, 1)',
  'hsla(276, 71%, 92%, 1)',
  'hsla(274, 65%, 88%, 1)',
  'hsla(273, 61%, 82%, 1)',
  'hsla(272, 60%, 74%, 1)',
  'hsla(272, 51%, 54%, 1)',
  'hsla(272, 47%, 50%, 1)',
  'hsla(272, 50%, 46%, 1)',
  'hsla(272, 66%, 16%, 1)',
  'hsla(272, 66%, 16%, 0)',
  'hsla(272, 66%, 16%, 0.25)',
  'hsla(272, 66%, 16%, 0.5)',
  'hsla(272, 66%, 16%, 0.75)',
  'hsla(324, 100%, 99%, 0)',
  'hsla(324, 100%, 99%, 0.25)',
  'hsla(324, 100%, 99%, 0.5)',
  'hsla(324, 100%, 99%, 0.75)',
  'hsla(320, 100%, 99%, 1)',
  'hsla(322, 100%, 98%, 1)',
  'hsla(323, 89%, 96%, 1)',
  'hsla(323, 79%, 94%, 1)',
  'hsla(324, 73%, 91%, 1)',
  'hsla(323, 65%, 86%, 1)',
  'hsla(323, 62%, 80%, 1)',
  'hsla(323, 60%, 72%, 1)',
  'hsla(322, 65%, 55%, 1)',
  'hsla(322, 64%, 51%, 1)',
  'hsla(322, 75%, 46%, 1)',
  'hsla(321, 71%, 14%, 1)',
  'hsla(321, 72%, 14%, 0)',
  'hsla(321, 72%, 14%, 0.25)',
  'hsla(321, 72%, 14%, 0.5)',
  'hsla(321, 72%, 14%, 0.75)',
  'hsla(30, 20%, 98%, 0)',
  'hsla(30, 20%, 98%, 0.25)',
  'hsla(30, 20%, 98%, 0.5)',
  'hsla(30, 20%, 98%, 0.75)',
  'hsla(40, 27%, 98%, 1)',
  'hsla(43, 23%, 94%, 1)',
  'hsla(36, 22%, 91%, 1)',
  'hsla(38, 22%, 90%, 1)',
  'hsla(37, 21%, 88%, 1)',
  'hsla(36, 19%, 85%, 1)',
  'hsla(34, 21%, 74%, 1)',
  'hsla(35, 20%, 70%, 1)',
  'hsla(35, 20%, 67%, 1)',
  'hsla(34, 19%, 47%, 1)',
  'hsla(35, 18%, 37%, 1)',
  'hsla(33, 18%, 20%, 1)',
  'hsla(33, 18%, 20%, 0)',
  'hsla(33, 18%, 20%, 0.25)',
  'hsla(33, 18%, 20%, 0.5)',
  'hsla(33, 18%, 20%, 0.75)',
  'hsla(0, 0%, 11%, 1)',
  'hsla(0, 0%, 18%, 1)',
  'hsla(0, 0%, 24%, 1)',
  'hsla(0, 0%, 31%, 1)',
  'hsla(0, 0%, 49%, 1)',
  'hsla(0, 0%, 63%, 1)',
  'hsla(0, 0%, 93%, 0)',
  'hsla(0, 0%, 93%, 0.25)',
  'hsla(0, 0%, 93%, 0.5)',
  'hsla(0, 0%, 93%, 0.75)',
  'hsla(214, 35%, 9%, 0)',
  'hsla(214, 35%, 9%, 0.25)',
  'hsla(214, 35%, 9%, 0.5)',
  'hsla(214, 35%, 9%, 0.75)',
  'hsla(212, 36%, 9%, 1)',
  'hsla(216, 50%, 12%, 1)',
  'hsla(214, 59%, 15%, 1)',
  'hsla(214, 65%, 18%, 1)',
  'hsla(213, 71%, 20%, 1)',
  'hsla(212, 78%, 23%, 1)',
  'hsla(211, 86%, 27%, 1)',
  'hsla(211, 90%, 34%, 1)',
  'hsla(209, 100%, 61%, 1)',
  'hsla(210, 100%, 66%, 1)',
  'hsla(206, 100%, 96%, 1)',
  'hsla(207, 100%, 96%, 0)',
  'hsla(207, 100%, 96%, 0.25)',
  'hsla(207, 100%, 96%, 0.5)',
  'hsla(207, 100%, 96%, 0.75)',
  'hsla(28, 67%, 7%, 0)',
  'hsla(28, 67%, 7%, 0.25)',
  'hsla(28, 67%, 7%, 0.5)',
  'hsla(28, 67%, 7%, 0.75)',
  'hsla(29, 68%, 7%, 1)',
  'hsla(28, 100%, 8%, 1)',
  'hsla(26, 90%, 12%, 1)',
  'hsla(25, 89%, 14%, 1)',
  'hsla(24, 88%, 16%, 1)',
  'hsla(24, 88%, 20%, 1)',
  'hsla(24, 92%, 24%, 1)',
  'hsla(25, 100%, 29%, 1)',
  'hsla(24, 100%, 58%, 1)',
  'hsla(24, 100%, 62%, 1)',
  'hsla(24, 94%, 93%, 1)',
  'hsla(25, 94%, 93%, 0)',
  'hsla(25, 94%, 93%, 0.25)',
  'hsla(25, 94%, 93%, 0.5)',
  'hsla(25, 94%, 93%, 0.75)',
  'hsla(351, 25%, 10%, 0)',
  'hsla(351, 25%, 10%, 0.25)',
  'hsla(351, 25%, 10%, 0.5)',
  'hsla(351, 25%, 10%, 0.75)',
  'hsla(350, 24%, 10%, 1)',
  'hsla(357, 34%, 12%, 1)',
  'hsla(357, 43%, 16%, 1)',
  'hsla(356, 47%, 19%, 1)',
  'hsla(356, 51%, 22%, 1)',
  'hsla(357, 55%, 26%, 1)',
  'hsla(357, 60%, 32%, 1)',
  'hsla(358, 65%, 40%, 1)',
  'hsla(358, 86%, 64%, 1)',
  'hsla(358, 100%, 69%, 1)',
  'hsla(353, 90%, 96%, 1)',
  'hsla(353, 90%, 96%, 0)',
  'hsla(353, 90%, 96%, 0.25)',
  'hsla(353, 90%, 96%, 0.5)',
  'hsla(353, 90%, 96%, 0.75)',
  'hsla(46, 100%, 5%, 0)',
  'hsla(46, 100%, 5%, 0.25)',
  'hsla(46, 100%, 5%, 0.5)',
  'hsla(46, 100%, 5%, 0.75)',
  'hsla(45, 100%, 5%, 1)',
  'hsla(46, 100%, 7%, 1)',
  'hsla(45, 100%, 9%, 1)',
  'hsla(45, 100%, 10%, 1)',
  'hsla(46, 100%, 12%, 1)',
  'hsla(49, 100%, 14%, 1)',
  'hsla(49, 89%, 18%, 1)',
  'hsla(50, 100%, 22%, 1)',
  'hsla(54, 100%, 68%, 1)',
  'hsla(48, 100%, 47%, 1)',
  'hsla(53, 100%, 91%, 1)',
  'hsla(53, 100%, 91%, 0)',
  'hsla(53, 100%, 91%, 0.25)',
  'hsla(53, 100%, 91%, 0.5)',
  'hsla(53, 100%, 91%, 0.75)',
  'hsla(145, 33%, 7%, 0)',
  'hsla(145, 33%, 7%, 0.25)',
  'hsla(145, 33%, 7%, 0.5)',
  'hsla(145, 33%, 7%, 0.75)',
  'hsla(145, 32%, 7%, 1)',
  'hsla(155, 44%, 8%, 1)',
  'hsla(155, 46%, 11%, 1)',
  'hsla(154, 48%, 13%, 1)',
  'hsla(155, 50%, 15%, 1)',
  'hsla(154, 51%, 18%, 1)',
  'hsla(153, 51%, 22%, 1)',
  'hsla(151, 52%, 28%, 1)',
  'hsla(151, 49%, 46%, 1)',
  'hsla(151, 50%, 53%, 1)',
  'hsla(136, 73%, 94%, 1)',
  'hsla(134, 73%, 94%, 0)',
  'hsla(134, 73%, 94%, 0.25)',
  'hsla(134, 73%, 94%, 0.5)',
  'hsla(134, 73%, 94%, 0.75)',
  'hsla(287, 18%, 10%, 0)',
  'hsla(287, 18%, 10%, 0.25)',
  'hsla(287, 18%, 10%, 0.5)',
  'hsla(287, 18%, 10%, 0.75)',
  'hsla(287, 18%, 10%, 1)',
  'hsla(283, 30%, 12%, 1)',
  'hsla(281, 38%, 16%, 1)',
  'hsla(280, 41%, 20%, 1)',
  'hsla(279, 44%, 23%, 1)',
  'hsla(277, 46%, 28%, 1)',
  'hsla(274, 49%, 35%, 1)',
  'hsla(272, 52%, 46%, 1)',
  'hsla(273, 57%, 59%, 1)',
  'hsla(275, 80%, 71%, 1)',
  'hsla(281, 73%, 96%, 1)',
  'hsla(284, 71%, 96%, 0)',
  'hsla(284, 71%, 96%, 0.25)',
  'hsla(284, 71%, 96%, 0.5)',
  'hsla(284, 71%, 96%, 0.75)',
  'hsla(318, 25%, 10%, 0)',
  'hsla(318, 25%, 10%, 0.25)',
  'hsla(318, 25%, 10%, 0.5)',
  'hsla(318, 25%, 10%, 0.75)',
  'hsla(318, 27%, 10%, 1)',
  'hsla(319, 32%, 12%, 1)',
  'hsla(319, 41%, 16%, 1)',
  'hsla(320, 45%, 19%, 1)',
  'hsla(319, 50%, 21%, 1)',
  'hsla(321, 54%, 25%, 1)',
  'hsla(321, 62%, 30%, 1)',
  'hsla(322, 75%, 37%, 1)',
  'hsla(323, 73%, 59%, 1)',
  'hsla(325, 90%, 66%, 1)',
  'hsla(322, 90%, 96%, 1)',
  'hsla(323, 90%, 96%, 0)',
  'hsla(323, 90%, 96%, 0.25)',
  'hsla(323, 90%, 96%, 0.5)',
  'hsla(323, 90%, 96%, 0.75)',
  'hsla(36, 10%, 10%, 0)',
  'hsla(36, 10%, 10%, 0.25)',
  'hsla(36, 10%, 10%, 0.5)',
  'hsla(36, 10%, 10%, 0.75)',
  'hsla(36, 10%, 10%, 1)',
  'hsla(30, 10%, 12%, 1)',
  'hsla(30, 11%, 18%, 1)',
  'hsla(30, 12%, 23%, 1)',
  'hsla(30, 14%, 28%, 1)',
  'hsla(29, 16%, 33%, 1)',
  'hsla(31, 18%, 38%, 1)',
  'hsla(30, 20%, 45%, 1)',
  'hsla(31, 21%, 50%, 1)',
  'hsla(29, 22%, 58%, 1)',
  'hsla(34, 24%, 70%, 1)',
  'hsla(9, 12%, 79%, 1)',
  'hsla(9, 12%, 79%, 0)',
  'hsla(9, 12%, 79%, 0.25)',
  'hsla(9, 12%, 79%, 0.5)',
  'hsla(9, 12%, 79%, 0.75)',
  'undefined',
]

const ks = [
'accentBackground',
'accentColor',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus',
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorPress',
'borderColorFocus',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor',
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'pink1',
'pink2',
'pink3',
'pink4',
'pink5',
'pink6',
'pink7',
'pink8',
'pink9',
'pink10',
'pink11',
'pink12',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple6',
'purple7',
'purple8',
'purple9',
'purple10',
'purple11',
'purple12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 4],[7, 5],[8, 6],[9, 7],[10, 8],[11, 9],[12, 10],[13, 11],[14, 12],[15, 13],[16, 14],[17, 15],[18, 16],[19, 17],[20, 18],[21, 19],[22, 20],[23, 21],[24, 22],[25, 23],[26, 8],[27, 7],[28, 9],[29, 9],[30, 11],[31, 10],[32, 12],[33, 11],[34, 19],[35, 18],[36, 19],[37, 18],[38, 20],[39, 16],[40, 21],[41, 24],[42, 25],[43, 26],[44, 27],[45, 28],[46, 29],[47, 30],[48, 31],[49, 32],[50, 33],[51, 34],[52, 35],[53, 36],[54, 37],[55, 38],[56, 39],[57, 40],[58, 41],[59, 42],[60, 43],[61, 44],[62, 45],[63, 46],[64, 47],[65, 48],[66, 49],[67, 50],[68, 51],[69, 52],[70, 53],[71, 54],[72, 55],[73, 56],[74, 57],[75, 58],[76, 59],[77, 60],[78, 61],[79, 62],[80, 63],[81, 64],[82, 65],[83, 66],[84, 67],[85, 68],[86, 69],[87, 70],[88, 71],[89, 72],[90, 73],[91, 74],[92, 75],[93, 76],[94, 77],[95, 78],[96, 79],[97, 80],[98, 81],[99, 82],[100, 83],[101, 84],[102, 85],[103, 86],[104, 87],[105, 88],[106, 89],[107, 90],[108, 91],[109, 92],[110, 93],[111, 94],[112, 95],[113, 96],[114, 97],[115, 98],[116, 99],[117, 100],[118, 101],[119, 102],[120, 103],[121, 104],[122, 105],[123, 106],[124, 107],[125, 108],[126, 109],[127, 110],[128, 111],[129, 112],[130, 113],[131, 114],[132, 115],[133, 116],[134, 117],[135, 118],[136, 119]])

export const light = n1
const n2 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 122],[7, 123],[8, 124],[9, 125],[10, 126],[11, 127],[12, 128],[13, 0],[14, 129],[15, 130],[16, 131],[17, 132],[18, 1],[19, 133],[20, 134],[21, 8],[22, 4],[23, 5],[24, 6],[25, 7],[26, 126],[27, 127],[28, 125],[29, 125],[30, 0],[31, 129],[32, 128],[33, 0],[34, 8],[35, 134],[36, 8],[37, 134],[38, 4],[39, 1],[40, 5],[41, 135],[42, 136],[43, 137],[44, 138],[45, 139],[46, 140],[47, 141],[48, 142],[49, 32],[50, 143],[51, 144],[52, 145],[53, 146],[54, 147],[55, 148],[56, 149],[57, 150],[58, 151],[59, 152],[60, 153],[61, 154],[62, 155],[63, 156],[64, 39],[65, 157],[66, 158],[67, 159],[68, 160],[69, 161],[70, 162],[71, 163],[72, 164],[73, 56],[74, 165],[75, 166],[76, 167],[77, 168],[78, 169],[79, 170],[80, 171],[81, 172],[82, 173],[83, 174],[84, 175],[85, 68],[86, 176],[87, 177],[88, 178],[89, 179],[90, 180],[91, 181],[92, 182],[93, 183],[94, 184],[95, 185],[96, 186],[97, 80],[98, 187],[99, 188],[100, 189],[101, 190],[102, 191],[103, 192],[104, 193],[105, 194],[106, 195],[107, 196],[108, 197],[109, 92],[110, 198],[111, 199],[112, 200],[113, 201],[114, 202],[115, 203],[116, 204],[117, 205],[118, 206],[119, 207],[120, 208],[121, 104],[122, 209],[123, 210],[124, 211],[125, 212],[126, 213],[127, 214],[128, 215],[129, 216],[130, 217],[131, 218],[132, 219],[133, 116],[134, 220],[135, 221],[136, 222]])

export const dark = n2
const n3 = t([[0, 11],[1, 16],[2, 2],[3, 2],[4, 3],[5, 3],[6, 122],[7, 123],[8, 124],[9, 125],[10, 126],[11, 127],[12, 128],[13, 0],[14, 129],[15, 130],[16, 131],[17, 132],[18, 1],[19, 133],[20, 134],[21, 8],[22, 4],[23, 5],[24, 6],[25, 7],[26, 126],[27, 125],[28, 127],[29, 127],[30, 0],[31, 128],[32, 129],[33, 0],[34, 8],[35, 134],[36, 8],[37, 134],[38, 4],[39, 1],[40, 5]])

export const light_accent = n3
const n4 = t([[0, 1],[1, 0],[2, 120],[3, 120],[4, 121],[5, 121],[6, 4],[7, 5],[8, 6],[9, 7],[10, 8],[11, 9],[12, 10],[13, 11],[14, 12],[15, 13],[16, 14],[17, 15],[18, 16],[19, 17],[20, 18],[21, 19],[22, 20],[23, 21],[24, 22],[25, 23],[26, 8],[27, 9],[28, 7],[29, 7],[30, 11],[31, 12],[32, 10],[33, 11],[34, 19],[35, 18],[36, 19],[37, 18],[38, 20],[39, 16],[40, 21]])

export const dark_accent = n4
const n5 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 223],[7, 224],[8, 225],[9, 226],[10, 227],[11, 9],[12, 228],[13, 229],[14, 230],[15, 14],[16, 231],[17, 232],[18, 16],[19, 233],[20, 234],[21, 19],[22, 20],[23, 21],[24, 22],[25, 23],[26, 227],[27, 226],[28, 9],[29, 9],[30, 229],[31, 228],[32, 230],[33, 229],[34, 19],[35, 234],[36, 19],[37, 234],[38, 20],[39, 16],[40, 21]])

export const light_gray = n5
const n6 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 235],[7, 236],[8, 237],[9, 238],[10, 239],[11, 240],[12, 241],[13, 242],[14, 243],[15, 244],[16, 245],[17, 246],[18, 247],[19, 248],[20, 249],[21, 250],[22, 251],[23, 252],[24, 253],[25, 254],[26, 239],[27, 238],[28, 240],[29, 240],[30, 242],[31, 241],[32, 243],[33, 242],[34, 250],[35, 249],[36, 250],[37, 249],[38, 251],[39, 247],[40, 252]])

export const light_blue = n6
const n7 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 255],[7, 256],[8, 257],[9, 258],[10, 259],[11, 260],[12, 261],[13, 262],[14, 263],[15, 264],[16, 265],[17, 266],[18, 267],[19, 268],[20, 269],[21, 270],[22, 271],[23, 272],[24, 273],[25, 274],[26, 259],[27, 258],[28, 260],[29, 260],[30, 262],[31, 261],[32, 263],[33, 262],[34, 270],[35, 269],[36, 270],[37, 269],[38, 271],[39, 267],[40, 272]])

export const light_orange = n7
const n8 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 275],[7, 276],[8, 277],[9, 278],[10, 279],[11, 279],[12, 280],[13, 281],[14, 282],[15, 283],[16, 284],[17, 285],[18, 286],[19, 287],[20, 288],[21, 289],[22, 290],[23, 291],[24, 292],[25, 293],[26, 279],[27, 278],[28, 279],[29, 279],[30, 281],[31, 280],[32, 282],[33, 281],[34, 289],[35, 288],[36, 289],[37, 288],[38, 290],[39, 286],[40, 291]])

export const light_red = n8
const n9 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 294],[7, 295],[8, 296],[9, 297],[10, 298],[11, 299],[12, 300],[13, 301],[14, 302],[15, 303],[16, 304],[17, 305],[18, 306],[19, 307],[20, 308],[21, 309],[22, 310],[23, 311],[24, 312],[25, 313],[26, 298],[27, 297],[28, 299],[29, 299],[30, 301],[31, 300],[32, 302],[33, 301],[34, 309],[35, 308],[36, 309],[37, 308],[38, 310],[39, 306],[40, 311]])

export const light_yellow = n9
const n10 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 314],[7, 315],[8, 316],[9, 317],[10, 318],[11, 319],[12, 320],[13, 321],[14, 322],[15, 323],[16, 324],[17, 325],[18, 326],[19, 327],[20, 328],[21, 329],[22, 330],[23, 331],[24, 332],[25, 333],[26, 318],[27, 317],[28, 319],[29, 319],[30, 321],[31, 320],[32, 322],[33, 321],[34, 329],[35, 328],[36, 329],[37, 328],[38, 330],[39, 326],[40, 331]])

export const light_green = n10
const n11 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 334],[7, 335],[8, 336],[9, 337],[10, 338],[11, 339],[12, 340],[13, 341],[14, 342],[15, 343],[16, 344],[17, 345],[18, 346],[19, 347],[20, 348],[21, 349],[22, 350],[23, 351],[24, 352],[25, 353],[26, 338],[27, 337],[28, 339],[29, 339],[30, 341],[31, 340],[32, 342],[33, 341],[34, 349],[35, 348],[36, 349],[37, 348],[38, 350],[39, 346],[40, 351]])

export const light_purple = n11
const n12 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 354],[7, 355],[8, 356],[9, 357],[10, 358],[11, 359],[12, 360],[13, 361],[14, 362],[15, 363],[16, 364],[17, 365],[18, 366],[19, 367],[20, 368],[21, 369],[22, 370],[23, 371],[24, 372],[25, 373],[26, 358],[27, 357],[28, 359],[29, 359],[30, 361],[31, 360],[32, 362],[33, 361],[34, 369],[35, 368],[36, 369],[37, 368],[38, 370],[39, 366],[40, 371]])

export const light_pink = n12
const n13 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 374],[7, 375],[8, 376],[9, 377],[10, 378],[11, 379],[12, 380],[13, 381],[14, 382],[15, 383],[16, 384],[17, 385],[18, 386],[19, 387],[20, 388],[21, 389],[22, 390],[23, 391],[24, 392],[25, 393],[26, 378],[27, 377],[28, 379],[29, 379],[30, 381],[31, 380],[32, 382],[33, 381],[34, 389],[35, 388],[36, 389],[37, 388],[38, 390],[39, 386],[40, 391]])

export const light_tan = n13
const n14 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 20],[7, 21],[8, 22],[9, 23],[10, 19],[11, 394],[12, 0],[13, 129],[14, 395],[15, 130],[16, 396],[17, 397],[18, 234],[19, 398],[20, 399],[21, 229],[22, 400],[23, 401],[24, 402],[25, 403],[26, 19],[27, 394],[28, 23],[29, 23],[30, 129],[31, 395],[32, 0],[33, 129],[34, 229],[35, 399],[36, 229],[37, 399],[38, 400],[39, 234],[40, 401]])

export const dark_gray = n14
const n15 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 404],[7, 405],[8, 406],[9, 407],[10, 408],[11, 409],[12, 410],[13, 411],[14, 412],[15, 413],[16, 414],[17, 415],[18, 247],[19, 416],[20, 417],[21, 418],[22, 419],[23, 420],[24, 421],[25, 422],[26, 408],[27, 409],[28, 407],[29, 407],[30, 411],[31, 412],[32, 410],[33, 411],[34, 418],[35, 417],[36, 418],[37, 417],[38, 419],[39, 247],[40, 420]])

export const dark_blue = n15
const n16 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 423],[7, 424],[8, 425],[9, 426],[10, 427],[11, 428],[12, 429],[13, 430],[14, 431],[15, 432],[16, 433],[17, 434],[18, 267],[19, 435],[20, 436],[21, 437],[22, 438],[23, 439],[24, 440],[25, 441],[26, 427],[27, 428],[28, 426],[29, 426],[30, 430],[31, 431],[32, 429],[33, 430],[34, 437],[35, 436],[36, 437],[37, 436],[38, 438],[39, 267],[40, 439]])

export const dark_orange = n16
const n17 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 442],[7, 443],[8, 444],[9, 445],[10, 446],[11, 447],[12, 448],[13, 449],[14, 450],[15, 451],[16, 452],[17, 453],[18, 286],[19, 454],[20, 455],[21, 456],[22, 457],[23, 458],[24, 459],[25, 460],[26, 446],[27, 447],[28, 445],[29, 445],[30, 449],[31, 450],[32, 448],[33, 449],[34, 456],[35, 455],[36, 456],[37, 455],[38, 457],[39, 286],[40, 458]])

export const dark_red = n17
const n18 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 461],[7, 462],[8, 463],[9, 464],[10, 465],[11, 466],[12, 467],[13, 468],[14, 469],[15, 470],[16, 471],[17, 472],[18, 306],[19, 473],[20, 474],[21, 475],[22, 476],[23, 477],[24, 478],[25, 479],[26, 465],[27, 466],[28, 464],[29, 464],[30, 468],[31, 469],[32, 467],[33, 468],[34, 475],[35, 474],[36, 475],[37, 474],[38, 476],[39, 306],[40, 477]])

export const dark_yellow = n18
const n19 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 480],[7, 481],[8, 482],[9, 483],[10, 484],[11, 485],[12, 486],[13, 487],[14, 488],[15, 489],[16, 490],[17, 491],[18, 326],[19, 492],[20, 493],[21, 494],[22, 495],[23, 496],[24, 497],[25, 498],[26, 484],[27, 485],[28, 483],[29, 483],[30, 487],[31, 488],[32, 486],[33, 487],[34, 494],[35, 493],[36, 494],[37, 493],[38, 495],[39, 326],[40, 496]])

export const dark_green = n19
const n20 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 499],[7, 500],[8, 501],[9, 502],[10, 503],[11, 504],[12, 505],[13, 506],[14, 507],[15, 508],[16, 509],[17, 510],[18, 346],[19, 511],[20, 512],[21, 513],[22, 514],[23, 515],[24, 516],[25, 517],[26, 503],[27, 504],[28, 502],[29, 502],[30, 506],[31, 507],[32, 505],[33, 506],[34, 513],[35, 512],[36, 513],[37, 512],[38, 514],[39, 346],[40, 515]])

export const dark_purple = n20
const n21 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 518],[7, 519],[8, 520],[9, 521],[10, 522],[11, 523],[12, 524],[13, 525],[14, 526],[15, 527],[16, 528],[17, 529],[18, 366],[19, 530],[20, 531],[21, 532],[22, 533],[23, 534],[24, 535],[25, 536],[26, 522],[27, 523],[28, 521],[29, 521],[30, 525],[31, 526],[32, 524],[33, 525],[34, 532],[35, 531],[36, 532],[37, 531],[38, 533],[39, 366],[40, 534]])

export const dark_pink = n21
const n22 = t([[0, 16],[1, 11],[2, 120],[3, 120],[4, 121],[5, 121],[6, 537],[7, 538],[8, 539],[9, 540],[10, 541],[11, 542],[12, 543],[13, 544],[14, 545],[15, 546],[16, 547],[17, 548],[18, 549],[19, 550],[20, 551],[21, 552],[22, 553],[23, 554],[24, 555],[25, 556],[26, 541],[27, 542],[28, 540],[29, 540],[30, 544],[31, 545],[32, 543],[33, 544],[34, 552],[35, 551],[36, 552],[37, 551],[38, 553],[39, 549],[40, 554]])

export const dark_tan = n22
const n23 = t([[34, 18],[35, 17],[36, 18],[37, 17]])

export const light_alt1 = n23
const n24 = t([[34, 17],[35, 16],[36, 17],[37, 16]])

export const light_alt2 = n24
const n25 = t([[26, 9],[27, 8],[28, 10],[29, 10],[30, 12],[31, 11],[33, 12],[32, 13]])

export const light_surface1 = n25
export const light_ListItem = n25
export const light_SelectTrigger = n25
export const light_Card = n25
export const light_Progress = n25
export const light_TooltipArrow = n25
export const light_SliderTrack = n25
export const light_Input = n25
export const light_TextArea = n25
export const light_alt1_ListItem = n25
export const light_alt1_SelectTrigger = n25
export const light_alt1_Card = n25
export const light_alt1_Progress = n25
export const light_alt1_TooltipArrow = n25
export const light_alt1_SliderTrack = n25
export const light_alt1_Input = n25
export const light_alt1_TextArea = n25
export const light_alt2_ListItem = n25
export const light_alt2_SelectTrigger = n25
export const light_alt2_Card = n25
export const light_alt2_Progress = n25
export const light_alt2_TooltipArrow = n25
export const light_alt2_SliderTrack = n25
export const light_alt2_Input = n25
export const light_alt2_TextArea = n25
export const light_surface1_ListItem = n25
export const light_surface1_SelectTrigger = n25
export const light_surface1_Card = n25
export const light_surface1_Progress = n25
export const light_surface1_TooltipArrow = n25
export const light_surface1_SliderTrack = n25
export const light_surface1_Input = n25
export const light_surface1_TextArea = n25
export const light_surface2_ListItem = n25
export const light_surface2_SelectTrigger = n25
export const light_surface2_Card = n25
export const light_surface2_Progress = n25
export const light_surface2_TooltipArrow = n25
export const light_surface2_SliderTrack = n25
export const light_surface2_Input = n25
export const light_surface2_TextArea = n25
export const light_surface3_ListItem = n25
export const light_surface3_SelectTrigger = n25
export const light_surface3_Card = n25
export const light_surface3_Progress = n25
export const light_surface3_TooltipArrow = n25
export const light_surface3_SliderTrack = n25
export const light_surface3_Input = n25
export const light_surface3_TextArea = n25
const n26 = t([[26, 10],[27, 9],[28, 11],[29, 11],[30, 13],[31, 12],[33, 13],[32, 14]])

export const light_surface2 = n26
export const light_Checkbox = n26
export const light_Switch = n26
export const light_TooltipContent = n26
export const light_RadioGroupItem = n26
export const light_alt1_Checkbox = n26
export const light_alt1_Switch = n26
export const light_alt1_TooltipContent = n26
export const light_alt1_RadioGroupItem = n26
export const light_alt2_Checkbox = n26
export const light_alt2_Switch = n26
export const light_alt2_TooltipContent = n26
export const light_alt2_RadioGroupItem = n26
export const light_surface1_Checkbox = n26
export const light_surface1_Switch = n26
export const light_surface1_TooltipContent = n26
export const light_surface1_RadioGroupItem = n26
export const light_surface2_Checkbox = n26
export const light_surface2_Switch = n26
export const light_surface2_TooltipContent = n26
export const light_surface2_RadioGroupItem = n26
export const light_surface3_Checkbox = n26
export const light_surface3_Switch = n26
export const light_surface3_TooltipContent = n26
export const light_surface3_RadioGroupItem = n26
const n27 = t([[26, 11],[27, 10],[28, 12],[29, 12],[30, 14],[31, 13],[33, 14],[32, 15]])

export const light_surface3 = n27
export const light_Button = n27
export const light_SliderTrackActive = n27
export const light_alt1_Button = n27
export const light_alt1_SliderTrackActive = n27
export const light_alt2_Button = n27
export const light_alt2_SliderTrackActive = n27
export const light_surface1_Button = n27
export const light_surface1_SliderTrackActive = n27
export const light_surface2_Button = n27
export const light_surface2_SliderTrackActive = n27
export const light_surface3_Button = n27
export const light_surface3_SliderTrackActive = n27
const n28 = t([[34, 134],[35, 133],[36, 134],[37, 133]])

export const dark_alt1 = n28
const n29 = t([[34, 133],[35, 1],[36, 133],[37, 1]])

export const dark_alt2 = n29
const n30 = t([[26, 127],[27, 128],[28, 126],[29, 126],[30, 129],[31, 130],[33, 129],[32, 0]])

export const dark_surface1 = n30
export const dark_ListItem = n30
export const dark_SelectTrigger = n30
export const dark_Card = n30
export const dark_Progress = n30
export const dark_TooltipArrow = n30
export const dark_SliderTrack = n30
export const dark_Input = n30
export const dark_TextArea = n30
export const dark_alt1_ListItem = n30
export const dark_alt1_SelectTrigger = n30
export const dark_alt1_Card = n30
export const dark_alt1_Progress = n30
export const dark_alt1_TooltipArrow = n30
export const dark_alt1_SliderTrack = n30
export const dark_alt1_Input = n30
export const dark_alt1_TextArea = n30
export const dark_alt2_ListItem = n30
export const dark_alt2_SelectTrigger = n30
export const dark_alt2_Card = n30
export const dark_alt2_Progress = n30
export const dark_alt2_TooltipArrow = n30
export const dark_alt2_SliderTrack = n30
export const dark_alt2_Input = n30
export const dark_alt2_TextArea = n30
export const dark_surface1_ListItem = n30
export const dark_surface1_SelectTrigger = n30
export const dark_surface1_Card = n30
export const dark_surface1_Progress = n30
export const dark_surface1_TooltipArrow = n30
export const dark_surface1_SliderTrack = n30
export const dark_surface1_Input = n30
export const dark_surface1_TextArea = n30
export const dark_surface2_ListItem = n30
export const dark_surface2_SelectTrigger = n30
export const dark_surface2_Card = n30
export const dark_surface2_Progress = n30
export const dark_surface2_TooltipArrow = n30
export const dark_surface2_SliderTrack = n30
export const dark_surface2_Input = n30
export const dark_surface2_TextArea = n30
export const dark_surface3_ListItem = n30
export const dark_surface3_SelectTrigger = n30
export const dark_surface3_Card = n30
export const dark_surface3_Progress = n30
export const dark_surface3_TooltipArrow = n30
export const dark_surface3_SliderTrack = n30
export const dark_surface3_Input = n30
export const dark_surface3_TextArea = n30
const n31 = t([[26, 128],[27, 0],[28, 127],[29, 127],[30, 130],[31, 131],[33, 130],[32, 129]])

export const dark_surface2 = n31
export const dark_Checkbox = n31
export const dark_Switch = n31
export const dark_TooltipContent = n31
export const dark_RadioGroupItem = n31
export const dark_alt1_Checkbox = n31
export const dark_alt1_Switch = n31
export const dark_alt1_TooltipContent = n31
export const dark_alt1_RadioGroupItem = n31
export const dark_alt2_Checkbox = n31
export const dark_alt2_Switch = n31
export const dark_alt2_TooltipContent = n31
export const dark_alt2_RadioGroupItem = n31
export const dark_surface1_Checkbox = n31
export const dark_surface1_Switch = n31
export const dark_surface1_TooltipContent = n31
export const dark_surface1_RadioGroupItem = n31
export const dark_surface2_Checkbox = n31
export const dark_surface2_Switch = n31
export const dark_surface2_TooltipContent = n31
export const dark_surface2_RadioGroupItem = n31
export const dark_surface3_Checkbox = n31
export const dark_surface3_Switch = n31
export const dark_surface3_TooltipContent = n31
export const dark_surface3_RadioGroupItem = n31
const n32 = t([[26, 0],[27, 129],[28, 128],[29, 128],[30, 131],[31, 132],[33, 131],[32, 130]])

export const dark_surface3 = n32
export const dark_Button = n32
export const dark_SliderTrackActive = n32
export const dark_alt1_Button = n32
export const dark_alt1_SliderTrackActive = n32
export const dark_alt2_Button = n32
export const dark_alt2_SliderTrackActive = n32
export const dark_surface1_Button = n32
export const dark_surface1_SliderTrackActive = n32
export const dark_surface2_Button = n32
export const dark_surface2_SliderTrackActive = n32
export const dark_surface3_Button = n32
export const dark_surface3_SliderTrackActive = n32
const n33 = t([[34, 234],[35, 233],[36, 234],[37, 233]])

export const light_gray_alt1 = n33
const n34 = t([[34, 233],[35, 16],[36, 233],[37, 16]])

export const light_gray_alt2 = n34
const n35 = t([[26, 9],[27, 227],[28, 228],[29, 228],[30, 230],[31, 229],[33, 230],[32, 14]])

export const light_gray_surface1 = n35
export const light_gray_ListItem = n35
export const light_gray_SelectTrigger = n35
export const light_gray_Card = n35
export const light_gray_Progress = n35
export const light_gray_TooltipArrow = n35
export const light_gray_SliderTrack = n35
export const light_gray_Input = n35
export const light_gray_TextArea = n35
export const light_gray_alt1_ListItem = n35
export const light_gray_alt1_SelectTrigger = n35
export const light_gray_alt1_Card = n35
export const light_gray_alt1_Progress = n35
export const light_gray_alt1_TooltipArrow = n35
export const light_gray_alt1_SliderTrack = n35
export const light_gray_alt1_Input = n35
export const light_gray_alt1_TextArea = n35
export const light_gray_alt2_ListItem = n35
export const light_gray_alt2_SelectTrigger = n35
export const light_gray_alt2_Card = n35
export const light_gray_alt2_Progress = n35
export const light_gray_alt2_TooltipArrow = n35
export const light_gray_alt2_SliderTrack = n35
export const light_gray_alt2_Input = n35
export const light_gray_alt2_TextArea = n35
export const light_gray_surface1_ListItem = n35
export const light_gray_surface1_SelectTrigger = n35
export const light_gray_surface1_Card = n35
export const light_gray_surface1_Progress = n35
export const light_gray_surface1_TooltipArrow = n35
export const light_gray_surface1_SliderTrack = n35
export const light_gray_surface1_Input = n35
export const light_gray_surface1_TextArea = n35
export const light_gray_surface2_ListItem = n35
export const light_gray_surface2_SelectTrigger = n35
export const light_gray_surface2_Card = n35
export const light_gray_surface2_Progress = n35
export const light_gray_surface2_TooltipArrow = n35
export const light_gray_surface2_SliderTrack = n35
export const light_gray_surface2_Input = n35
export const light_gray_surface2_TextArea = n35
export const light_gray_surface3_ListItem = n35
export const light_gray_surface3_SelectTrigger = n35
export const light_gray_surface3_Card = n35
export const light_gray_surface3_Progress = n35
export const light_gray_surface3_TooltipArrow = n35
export const light_gray_surface3_SliderTrack = n35
export const light_gray_surface3_Input = n35
export const light_gray_surface3_TextArea = n35
const n36 = t([[26, 228],[27, 9],[28, 229],[29, 229],[30, 14],[31, 230],[33, 14],[32, 231]])

export const light_gray_surface2 = n36
export const light_gray_Checkbox = n36
export const light_gray_Switch = n36
export const light_gray_TooltipContent = n36
export const light_gray_RadioGroupItem = n36
export const light_gray_alt1_Checkbox = n36
export const light_gray_alt1_Switch = n36
export const light_gray_alt1_TooltipContent = n36
export const light_gray_alt1_RadioGroupItem = n36
export const light_gray_alt2_Checkbox = n36
export const light_gray_alt2_Switch = n36
export const light_gray_alt2_TooltipContent = n36
export const light_gray_alt2_RadioGroupItem = n36
export const light_gray_surface1_Checkbox = n36
export const light_gray_surface1_Switch = n36
export const light_gray_surface1_TooltipContent = n36
export const light_gray_surface1_RadioGroupItem = n36
export const light_gray_surface2_Checkbox = n36
export const light_gray_surface2_Switch = n36
export const light_gray_surface2_TooltipContent = n36
export const light_gray_surface2_RadioGroupItem = n36
export const light_gray_surface3_Checkbox = n36
export const light_gray_surface3_Switch = n36
export const light_gray_surface3_TooltipContent = n36
export const light_gray_surface3_RadioGroupItem = n36
const n37 = t([[26, 229],[27, 228],[28, 230],[29, 230],[30, 231],[31, 14],[33, 231],[32, 232]])

export const light_gray_surface3 = n37
export const light_gray_Button = n37
export const light_gray_SliderTrackActive = n37
export const light_gray_alt1_Button = n37
export const light_gray_alt1_SliderTrackActive = n37
export const light_gray_alt2_Button = n37
export const light_gray_alt2_SliderTrackActive = n37
export const light_gray_surface1_Button = n37
export const light_gray_surface1_SliderTrackActive = n37
export const light_gray_surface2_Button = n37
export const light_gray_surface2_SliderTrackActive = n37
export const light_gray_surface3_Button = n37
export const light_gray_surface3_SliderTrackActive = n37
const n38 = t([[34, 249],[35, 248],[36, 249],[37, 248]])

export const light_blue_alt1 = n38
const n39 = t([[34, 248],[35, 247],[36, 248],[37, 247]])

export const light_blue_alt2 = n39
const n40 = t([[26, 240],[27, 239],[28, 241],[29, 241],[30, 243],[31, 242],[33, 243],[32, 244]])

export const light_blue_surface1 = n40
export const light_blue_ListItem = n40
export const light_blue_SelectTrigger = n40
export const light_blue_Card = n40
export const light_blue_Progress = n40
export const light_blue_TooltipArrow = n40
export const light_blue_SliderTrack = n40
export const light_blue_Input = n40
export const light_blue_TextArea = n40
export const light_blue_alt1_ListItem = n40
export const light_blue_alt1_SelectTrigger = n40
export const light_blue_alt1_Card = n40
export const light_blue_alt1_Progress = n40
export const light_blue_alt1_TooltipArrow = n40
export const light_blue_alt1_SliderTrack = n40
export const light_blue_alt1_Input = n40
export const light_blue_alt1_TextArea = n40
export const light_blue_alt2_ListItem = n40
export const light_blue_alt2_SelectTrigger = n40
export const light_blue_alt2_Card = n40
export const light_blue_alt2_Progress = n40
export const light_blue_alt2_TooltipArrow = n40
export const light_blue_alt2_SliderTrack = n40
export const light_blue_alt2_Input = n40
export const light_blue_alt2_TextArea = n40
export const light_blue_surface1_ListItem = n40
export const light_blue_surface1_SelectTrigger = n40
export const light_blue_surface1_Card = n40
export const light_blue_surface1_Progress = n40
export const light_blue_surface1_TooltipArrow = n40
export const light_blue_surface1_SliderTrack = n40
export const light_blue_surface1_Input = n40
export const light_blue_surface1_TextArea = n40
export const light_blue_surface2_ListItem = n40
export const light_blue_surface2_SelectTrigger = n40
export const light_blue_surface2_Card = n40
export const light_blue_surface2_Progress = n40
export const light_blue_surface2_TooltipArrow = n40
export const light_blue_surface2_SliderTrack = n40
export const light_blue_surface2_Input = n40
export const light_blue_surface2_TextArea = n40
export const light_blue_surface3_ListItem = n40
export const light_blue_surface3_SelectTrigger = n40
export const light_blue_surface3_Card = n40
export const light_blue_surface3_Progress = n40
export const light_blue_surface3_TooltipArrow = n40
export const light_blue_surface3_SliderTrack = n40
export const light_blue_surface3_Input = n40
export const light_blue_surface3_TextArea = n40
const n41 = t([[26, 241],[27, 240],[28, 242],[29, 242],[30, 244],[31, 243],[33, 244],[32, 245]])

export const light_blue_surface2 = n41
export const light_blue_Checkbox = n41
export const light_blue_Switch = n41
export const light_blue_TooltipContent = n41
export const light_blue_RadioGroupItem = n41
export const light_blue_alt1_Checkbox = n41
export const light_blue_alt1_Switch = n41
export const light_blue_alt1_TooltipContent = n41
export const light_blue_alt1_RadioGroupItem = n41
export const light_blue_alt2_Checkbox = n41
export const light_blue_alt2_Switch = n41
export const light_blue_alt2_TooltipContent = n41
export const light_blue_alt2_RadioGroupItem = n41
export const light_blue_surface1_Checkbox = n41
export const light_blue_surface1_Switch = n41
export const light_blue_surface1_TooltipContent = n41
export const light_blue_surface1_RadioGroupItem = n41
export const light_blue_surface2_Checkbox = n41
export const light_blue_surface2_Switch = n41
export const light_blue_surface2_TooltipContent = n41
export const light_blue_surface2_RadioGroupItem = n41
export const light_blue_surface3_Checkbox = n41
export const light_blue_surface3_Switch = n41
export const light_blue_surface3_TooltipContent = n41
export const light_blue_surface3_RadioGroupItem = n41
const n42 = t([[26, 242],[27, 241],[28, 243],[29, 243],[30, 245],[31, 244],[33, 245],[32, 246]])

export const light_blue_surface3 = n42
export const light_blue_Button = n42
export const light_blue_SliderTrackActive = n42
export const light_blue_alt1_Button = n42
export const light_blue_alt1_SliderTrackActive = n42
export const light_blue_alt2_Button = n42
export const light_blue_alt2_SliderTrackActive = n42
export const light_blue_surface1_Button = n42
export const light_blue_surface1_SliderTrackActive = n42
export const light_blue_surface2_Button = n42
export const light_blue_surface2_SliderTrackActive = n42
export const light_blue_surface3_Button = n42
export const light_blue_surface3_SliderTrackActive = n42
const n43 = t([[34, 269],[35, 268],[36, 269],[37, 268]])

export const light_orange_alt1 = n43
const n44 = t([[34, 268],[35, 267],[36, 268],[37, 267]])

export const light_orange_alt2 = n44
const n45 = t([[26, 260],[27, 259],[28, 261],[29, 261],[30, 263],[31, 262],[33, 263],[32, 264]])

export const light_orange_surface1 = n45
export const light_orange_ListItem = n45
export const light_orange_SelectTrigger = n45
export const light_orange_Card = n45
export const light_orange_Progress = n45
export const light_orange_TooltipArrow = n45
export const light_orange_SliderTrack = n45
export const light_orange_Input = n45
export const light_orange_TextArea = n45
export const light_orange_alt1_ListItem = n45
export const light_orange_alt1_SelectTrigger = n45
export const light_orange_alt1_Card = n45
export const light_orange_alt1_Progress = n45
export const light_orange_alt1_TooltipArrow = n45
export const light_orange_alt1_SliderTrack = n45
export const light_orange_alt1_Input = n45
export const light_orange_alt1_TextArea = n45
export const light_orange_alt2_ListItem = n45
export const light_orange_alt2_SelectTrigger = n45
export const light_orange_alt2_Card = n45
export const light_orange_alt2_Progress = n45
export const light_orange_alt2_TooltipArrow = n45
export const light_orange_alt2_SliderTrack = n45
export const light_orange_alt2_Input = n45
export const light_orange_alt2_TextArea = n45
export const light_orange_surface1_ListItem = n45
export const light_orange_surface1_SelectTrigger = n45
export const light_orange_surface1_Card = n45
export const light_orange_surface1_Progress = n45
export const light_orange_surface1_TooltipArrow = n45
export const light_orange_surface1_SliderTrack = n45
export const light_orange_surface1_Input = n45
export const light_orange_surface1_TextArea = n45
export const light_orange_surface2_ListItem = n45
export const light_orange_surface2_SelectTrigger = n45
export const light_orange_surface2_Card = n45
export const light_orange_surface2_Progress = n45
export const light_orange_surface2_TooltipArrow = n45
export const light_orange_surface2_SliderTrack = n45
export const light_orange_surface2_Input = n45
export const light_orange_surface2_TextArea = n45
export const light_orange_surface3_ListItem = n45
export const light_orange_surface3_SelectTrigger = n45
export const light_orange_surface3_Card = n45
export const light_orange_surface3_Progress = n45
export const light_orange_surface3_TooltipArrow = n45
export const light_orange_surface3_SliderTrack = n45
export const light_orange_surface3_Input = n45
export const light_orange_surface3_TextArea = n45
const n46 = t([[26, 261],[27, 260],[28, 262],[29, 262],[30, 264],[31, 263],[33, 264],[32, 265]])

export const light_orange_surface2 = n46
export const light_orange_Checkbox = n46
export const light_orange_Switch = n46
export const light_orange_TooltipContent = n46
export const light_orange_RadioGroupItem = n46
export const light_orange_alt1_Checkbox = n46
export const light_orange_alt1_Switch = n46
export const light_orange_alt1_TooltipContent = n46
export const light_orange_alt1_RadioGroupItem = n46
export const light_orange_alt2_Checkbox = n46
export const light_orange_alt2_Switch = n46
export const light_orange_alt2_TooltipContent = n46
export const light_orange_alt2_RadioGroupItem = n46
export const light_orange_surface1_Checkbox = n46
export const light_orange_surface1_Switch = n46
export const light_orange_surface1_TooltipContent = n46
export const light_orange_surface1_RadioGroupItem = n46
export const light_orange_surface2_Checkbox = n46
export const light_orange_surface2_Switch = n46
export const light_orange_surface2_TooltipContent = n46
export const light_orange_surface2_RadioGroupItem = n46
export const light_orange_surface3_Checkbox = n46
export const light_orange_surface3_Switch = n46
export const light_orange_surface3_TooltipContent = n46
export const light_orange_surface3_RadioGroupItem = n46
const n47 = t([[26, 262],[27, 261],[28, 263],[29, 263],[30, 265],[31, 264],[33, 265],[32, 266]])

export const light_orange_surface3 = n47
export const light_orange_Button = n47
export const light_orange_SliderTrackActive = n47
export const light_orange_alt1_Button = n47
export const light_orange_alt1_SliderTrackActive = n47
export const light_orange_alt2_Button = n47
export const light_orange_alt2_SliderTrackActive = n47
export const light_orange_surface1_Button = n47
export const light_orange_surface1_SliderTrackActive = n47
export const light_orange_surface2_Button = n47
export const light_orange_surface2_SliderTrackActive = n47
export const light_orange_surface3_Button = n47
export const light_orange_surface3_SliderTrackActive = n47
const n48 = t([[34, 288],[35, 287],[36, 288],[37, 287]])

export const light_red_alt1 = n48
const n49 = t([[34, 287],[35, 286],[36, 287],[37, 286]])

export const light_red_alt2 = n49
const n50 = t([[26, 279],[27, 279],[28, 280],[29, 280],[30, 282],[31, 281],[33, 282],[32, 283]])

export const light_red_surface1 = n50
export const light_red_ListItem = n50
export const light_red_SelectTrigger = n50
export const light_red_Card = n50
export const light_red_Progress = n50
export const light_red_TooltipArrow = n50
export const light_red_SliderTrack = n50
export const light_red_Input = n50
export const light_red_TextArea = n50
export const light_red_alt1_ListItem = n50
export const light_red_alt1_SelectTrigger = n50
export const light_red_alt1_Card = n50
export const light_red_alt1_Progress = n50
export const light_red_alt1_TooltipArrow = n50
export const light_red_alt1_SliderTrack = n50
export const light_red_alt1_Input = n50
export const light_red_alt1_TextArea = n50
export const light_red_alt2_ListItem = n50
export const light_red_alt2_SelectTrigger = n50
export const light_red_alt2_Card = n50
export const light_red_alt2_Progress = n50
export const light_red_alt2_TooltipArrow = n50
export const light_red_alt2_SliderTrack = n50
export const light_red_alt2_Input = n50
export const light_red_alt2_TextArea = n50
export const light_red_surface1_ListItem = n50
export const light_red_surface1_SelectTrigger = n50
export const light_red_surface1_Card = n50
export const light_red_surface1_Progress = n50
export const light_red_surface1_TooltipArrow = n50
export const light_red_surface1_SliderTrack = n50
export const light_red_surface1_Input = n50
export const light_red_surface1_TextArea = n50
export const light_red_surface2_ListItem = n50
export const light_red_surface2_SelectTrigger = n50
export const light_red_surface2_Card = n50
export const light_red_surface2_Progress = n50
export const light_red_surface2_TooltipArrow = n50
export const light_red_surface2_SliderTrack = n50
export const light_red_surface2_Input = n50
export const light_red_surface2_TextArea = n50
export const light_red_surface3_ListItem = n50
export const light_red_surface3_SelectTrigger = n50
export const light_red_surface3_Card = n50
export const light_red_surface3_Progress = n50
export const light_red_surface3_TooltipArrow = n50
export const light_red_surface3_SliderTrack = n50
export const light_red_surface3_Input = n50
export const light_red_surface3_TextArea = n50
const n51 = t([[26, 280],[27, 279],[28, 281],[29, 281],[30, 283],[31, 282],[33, 283],[32, 284]])

export const light_red_surface2 = n51
export const light_red_Checkbox = n51
export const light_red_Switch = n51
export const light_red_TooltipContent = n51
export const light_red_RadioGroupItem = n51
export const light_red_alt1_Checkbox = n51
export const light_red_alt1_Switch = n51
export const light_red_alt1_TooltipContent = n51
export const light_red_alt1_RadioGroupItem = n51
export const light_red_alt2_Checkbox = n51
export const light_red_alt2_Switch = n51
export const light_red_alt2_TooltipContent = n51
export const light_red_alt2_RadioGroupItem = n51
export const light_red_surface1_Checkbox = n51
export const light_red_surface1_Switch = n51
export const light_red_surface1_TooltipContent = n51
export const light_red_surface1_RadioGroupItem = n51
export const light_red_surface2_Checkbox = n51
export const light_red_surface2_Switch = n51
export const light_red_surface2_TooltipContent = n51
export const light_red_surface2_RadioGroupItem = n51
export const light_red_surface3_Checkbox = n51
export const light_red_surface3_Switch = n51
export const light_red_surface3_TooltipContent = n51
export const light_red_surface3_RadioGroupItem = n51
const n52 = t([[26, 281],[27, 280],[28, 282],[29, 282],[30, 284],[31, 283],[33, 284],[32, 285]])

export const light_red_surface3 = n52
export const light_red_Button = n52
export const light_red_SliderTrackActive = n52
export const light_red_alt1_Button = n52
export const light_red_alt1_SliderTrackActive = n52
export const light_red_alt2_Button = n52
export const light_red_alt2_SliderTrackActive = n52
export const light_red_surface1_Button = n52
export const light_red_surface1_SliderTrackActive = n52
export const light_red_surface2_Button = n52
export const light_red_surface2_SliderTrackActive = n52
export const light_red_surface3_Button = n52
export const light_red_surface3_SliderTrackActive = n52
const n53 = t([[34, 308],[35, 307],[36, 308],[37, 307]])

export const light_yellow_alt1 = n53
const n54 = t([[34, 307],[35, 306],[36, 307],[37, 306]])

export const light_yellow_alt2 = n54
const n55 = t([[26, 299],[27, 298],[28, 300],[29, 300],[30, 302],[31, 301],[33, 302],[32, 303]])

export const light_yellow_surface1 = n55
export const light_yellow_ListItem = n55
export const light_yellow_SelectTrigger = n55
export const light_yellow_Card = n55
export const light_yellow_Progress = n55
export const light_yellow_TooltipArrow = n55
export const light_yellow_SliderTrack = n55
export const light_yellow_Input = n55
export const light_yellow_TextArea = n55
export const light_yellow_alt1_ListItem = n55
export const light_yellow_alt1_SelectTrigger = n55
export const light_yellow_alt1_Card = n55
export const light_yellow_alt1_Progress = n55
export const light_yellow_alt1_TooltipArrow = n55
export const light_yellow_alt1_SliderTrack = n55
export const light_yellow_alt1_Input = n55
export const light_yellow_alt1_TextArea = n55
export const light_yellow_alt2_ListItem = n55
export const light_yellow_alt2_SelectTrigger = n55
export const light_yellow_alt2_Card = n55
export const light_yellow_alt2_Progress = n55
export const light_yellow_alt2_TooltipArrow = n55
export const light_yellow_alt2_SliderTrack = n55
export const light_yellow_alt2_Input = n55
export const light_yellow_alt2_TextArea = n55
export const light_yellow_surface1_ListItem = n55
export const light_yellow_surface1_SelectTrigger = n55
export const light_yellow_surface1_Card = n55
export const light_yellow_surface1_Progress = n55
export const light_yellow_surface1_TooltipArrow = n55
export const light_yellow_surface1_SliderTrack = n55
export const light_yellow_surface1_Input = n55
export const light_yellow_surface1_TextArea = n55
export const light_yellow_surface2_ListItem = n55
export const light_yellow_surface2_SelectTrigger = n55
export const light_yellow_surface2_Card = n55
export const light_yellow_surface2_Progress = n55
export const light_yellow_surface2_TooltipArrow = n55
export const light_yellow_surface2_SliderTrack = n55
export const light_yellow_surface2_Input = n55
export const light_yellow_surface2_TextArea = n55
export const light_yellow_surface3_ListItem = n55
export const light_yellow_surface3_SelectTrigger = n55
export const light_yellow_surface3_Card = n55
export const light_yellow_surface3_Progress = n55
export const light_yellow_surface3_TooltipArrow = n55
export const light_yellow_surface3_SliderTrack = n55
export const light_yellow_surface3_Input = n55
export const light_yellow_surface3_TextArea = n55
const n56 = t([[26, 300],[27, 299],[28, 301],[29, 301],[30, 303],[31, 302],[33, 303],[32, 304]])

export const light_yellow_surface2 = n56
export const light_yellow_Checkbox = n56
export const light_yellow_Switch = n56
export const light_yellow_TooltipContent = n56
export const light_yellow_RadioGroupItem = n56
export const light_yellow_alt1_Checkbox = n56
export const light_yellow_alt1_Switch = n56
export const light_yellow_alt1_TooltipContent = n56
export const light_yellow_alt1_RadioGroupItem = n56
export const light_yellow_alt2_Checkbox = n56
export const light_yellow_alt2_Switch = n56
export const light_yellow_alt2_TooltipContent = n56
export const light_yellow_alt2_RadioGroupItem = n56
export const light_yellow_surface1_Checkbox = n56
export const light_yellow_surface1_Switch = n56
export const light_yellow_surface1_TooltipContent = n56
export const light_yellow_surface1_RadioGroupItem = n56
export const light_yellow_surface2_Checkbox = n56
export const light_yellow_surface2_Switch = n56
export const light_yellow_surface2_TooltipContent = n56
export const light_yellow_surface2_RadioGroupItem = n56
export const light_yellow_surface3_Checkbox = n56
export const light_yellow_surface3_Switch = n56
export const light_yellow_surface3_TooltipContent = n56
export const light_yellow_surface3_RadioGroupItem = n56
const n57 = t([[26, 301],[27, 300],[28, 302],[29, 302],[30, 304],[31, 303],[33, 304],[32, 305]])

export const light_yellow_surface3 = n57
export const light_yellow_Button = n57
export const light_yellow_SliderTrackActive = n57
export const light_yellow_alt1_Button = n57
export const light_yellow_alt1_SliderTrackActive = n57
export const light_yellow_alt2_Button = n57
export const light_yellow_alt2_SliderTrackActive = n57
export const light_yellow_surface1_Button = n57
export const light_yellow_surface1_SliderTrackActive = n57
export const light_yellow_surface2_Button = n57
export const light_yellow_surface2_SliderTrackActive = n57
export const light_yellow_surface3_Button = n57
export const light_yellow_surface3_SliderTrackActive = n57
const n58 = t([[34, 328],[35, 327],[36, 328],[37, 327]])

export const light_green_alt1 = n58
const n59 = t([[34, 327],[35, 326],[36, 327],[37, 326]])

export const light_green_alt2 = n59
const n60 = t([[26, 319],[27, 318],[28, 320],[29, 320],[30, 322],[31, 321],[33, 322],[32, 323]])

export const light_green_surface1 = n60
export const light_green_ListItem = n60
export const light_green_SelectTrigger = n60
export const light_green_Card = n60
export const light_green_Progress = n60
export const light_green_TooltipArrow = n60
export const light_green_SliderTrack = n60
export const light_green_Input = n60
export const light_green_TextArea = n60
export const light_green_alt1_ListItem = n60
export const light_green_alt1_SelectTrigger = n60
export const light_green_alt1_Card = n60
export const light_green_alt1_Progress = n60
export const light_green_alt1_TooltipArrow = n60
export const light_green_alt1_SliderTrack = n60
export const light_green_alt1_Input = n60
export const light_green_alt1_TextArea = n60
export const light_green_alt2_ListItem = n60
export const light_green_alt2_SelectTrigger = n60
export const light_green_alt2_Card = n60
export const light_green_alt2_Progress = n60
export const light_green_alt2_TooltipArrow = n60
export const light_green_alt2_SliderTrack = n60
export const light_green_alt2_Input = n60
export const light_green_alt2_TextArea = n60
export const light_green_surface1_ListItem = n60
export const light_green_surface1_SelectTrigger = n60
export const light_green_surface1_Card = n60
export const light_green_surface1_Progress = n60
export const light_green_surface1_TooltipArrow = n60
export const light_green_surface1_SliderTrack = n60
export const light_green_surface1_Input = n60
export const light_green_surface1_TextArea = n60
export const light_green_surface2_ListItem = n60
export const light_green_surface2_SelectTrigger = n60
export const light_green_surface2_Card = n60
export const light_green_surface2_Progress = n60
export const light_green_surface2_TooltipArrow = n60
export const light_green_surface2_SliderTrack = n60
export const light_green_surface2_Input = n60
export const light_green_surface2_TextArea = n60
export const light_green_surface3_ListItem = n60
export const light_green_surface3_SelectTrigger = n60
export const light_green_surface3_Card = n60
export const light_green_surface3_Progress = n60
export const light_green_surface3_TooltipArrow = n60
export const light_green_surface3_SliderTrack = n60
export const light_green_surface3_Input = n60
export const light_green_surface3_TextArea = n60
const n61 = t([[26, 320],[27, 319],[28, 321],[29, 321],[30, 323],[31, 322],[33, 323],[32, 324]])

export const light_green_surface2 = n61
export const light_green_Checkbox = n61
export const light_green_Switch = n61
export const light_green_TooltipContent = n61
export const light_green_RadioGroupItem = n61
export const light_green_alt1_Checkbox = n61
export const light_green_alt1_Switch = n61
export const light_green_alt1_TooltipContent = n61
export const light_green_alt1_RadioGroupItem = n61
export const light_green_alt2_Checkbox = n61
export const light_green_alt2_Switch = n61
export const light_green_alt2_TooltipContent = n61
export const light_green_alt2_RadioGroupItem = n61
export const light_green_surface1_Checkbox = n61
export const light_green_surface1_Switch = n61
export const light_green_surface1_TooltipContent = n61
export const light_green_surface1_RadioGroupItem = n61
export const light_green_surface2_Checkbox = n61
export const light_green_surface2_Switch = n61
export const light_green_surface2_TooltipContent = n61
export const light_green_surface2_RadioGroupItem = n61
export const light_green_surface3_Checkbox = n61
export const light_green_surface3_Switch = n61
export const light_green_surface3_TooltipContent = n61
export const light_green_surface3_RadioGroupItem = n61
const n62 = t([[26, 321],[27, 320],[28, 322],[29, 322],[30, 324],[31, 323],[33, 324],[32, 325]])

export const light_green_surface3 = n62
export const light_green_Button = n62
export const light_green_SliderTrackActive = n62
export const light_green_alt1_Button = n62
export const light_green_alt1_SliderTrackActive = n62
export const light_green_alt2_Button = n62
export const light_green_alt2_SliderTrackActive = n62
export const light_green_surface1_Button = n62
export const light_green_surface1_SliderTrackActive = n62
export const light_green_surface2_Button = n62
export const light_green_surface2_SliderTrackActive = n62
export const light_green_surface3_Button = n62
export const light_green_surface3_SliderTrackActive = n62
const n63 = t([[34, 348],[35, 347],[36, 348],[37, 347]])

export const light_purple_alt1 = n63
const n64 = t([[34, 347],[35, 346],[36, 347],[37, 346]])

export const light_purple_alt2 = n64
const n65 = t([[26, 339],[27, 338],[28, 340],[29, 340],[30, 342],[31, 341],[33, 342],[32, 343]])

export const light_purple_surface1 = n65
export const light_purple_ListItem = n65
export const light_purple_SelectTrigger = n65
export const light_purple_Card = n65
export const light_purple_Progress = n65
export const light_purple_TooltipArrow = n65
export const light_purple_SliderTrack = n65
export const light_purple_Input = n65
export const light_purple_TextArea = n65
export const light_purple_alt1_ListItem = n65
export const light_purple_alt1_SelectTrigger = n65
export const light_purple_alt1_Card = n65
export const light_purple_alt1_Progress = n65
export const light_purple_alt1_TooltipArrow = n65
export const light_purple_alt1_SliderTrack = n65
export const light_purple_alt1_Input = n65
export const light_purple_alt1_TextArea = n65
export const light_purple_alt2_ListItem = n65
export const light_purple_alt2_SelectTrigger = n65
export const light_purple_alt2_Card = n65
export const light_purple_alt2_Progress = n65
export const light_purple_alt2_TooltipArrow = n65
export const light_purple_alt2_SliderTrack = n65
export const light_purple_alt2_Input = n65
export const light_purple_alt2_TextArea = n65
export const light_purple_surface1_ListItem = n65
export const light_purple_surface1_SelectTrigger = n65
export const light_purple_surface1_Card = n65
export const light_purple_surface1_Progress = n65
export const light_purple_surface1_TooltipArrow = n65
export const light_purple_surface1_SliderTrack = n65
export const light_purple_surface1_Input = n65
export const light_purple_surface1_TextArea = n65
export const light_purple_surface2_ListItem = n65
export const light_purple_surface2_SelectTrigger = n65
export const light_purple_surface2_Card = n65
export const light_purple_surface2_Progress = n65
export const light_purple_surface2_TooltipArrow = n65
export const light_purple_surface2_SliderTrack = n65
export const light_purple_surface2_Input = n65
export const light_purple_surface2_TextArea = n65
export const light_purple_surface3_ListItem = n65
export const light_purple_surface3_SelectTrigger = n65
export const light_purple_surface3_Card = n65
export const light_purple_surface3_Progress = n65
export const light_purple_surface3_TooltipArrow = n65
export const light_purple_surface3_SliderTrack = n65
export const light_purple_surface3_Input = n65
export const light_purple_surface3_TextArea = n65
const n66 = t([[26, 340],[27, 339],[28, 341],[29, 341],[30, 343],[31, 342],[33, 343],[32, 344]])

export const light_purple_surface2 = n66
export const light_purple_Checkbox = n66
export const light_purple_Switch = n66
export const light_purple_TooltipContent = n66
export const light_purple_RadioGroupItem = n66
export const light_purple_alt1_Checkbox = n66
export const light_purple_alt1_Switch = n66
export const light_purple_alt1_TooltipContent = n66
export const light_purple_alt1_RadioGroupItem = n66
export const light_purple_alt2_Checkbox = n66
export const light_purple_alt2_Switch = n66
export const light_purple_alt2_TooltipContent = n66
export const light_purple_alt2_RadioGroupItem = n66
export const light_purple_surface1_Checkbox = n66
export const light_purple_surface1_Switch = n66
export const light_purple_surface1_TooltipContent = n66
export const light_purple_surface1_RadioGroupItem = n66
export const light_purple_surface2_Checkbox = n66
export const light_purple_surface2_Switch = n66
export const light_purple_surface2_TooltipContent = n66
export const light_purple_surface2_RadioGroupItem = n66
export const light_purple_surface3_Checkbox = n66
export const light_purple_surface3_Switch = n66
export const light_purple_surface3_TooltipContent = n66
export const light_purple_surface3_RadioGroupItem = n66
const n67 = t([[26, 341],[27, 340],[28, 342],[29, 342],[30, 344],[31, 343],[33, 344],[32, 345]])

export const light_purple_surface3 = n67
export const light_purple_Button = n67
export const light_purple_SliderTrackActive = n67
export const light_purple_alt1_Button = n67
export const light_purple_alt1_SliderTrackActive = n67
export const light_purple_alt2_Button = n67
export const light_purple_alt2_SliderTrackActive = n67
export const light_purple_surface1_Button = n67
export const light_purple_surface1_SliderTrackActive = n67
export const light_purple_surface2_Button = n67
export const light_purple_surface2_SliderTrackActive = n67
export const light_purple_surface3_Button = n67
export const light_purple_surface3_SliderTrackActive = n67
const n68 = t([[34, 368],[35, 367],[36, 368],[37, 367]])

export const light_pink_alt1 = n68
const n69 = t([[34, 367],[35, 366],[36, 367],[37, 366]])

export const light_pink_alt2 = n69
const n70 = t([[26, 359],[27, 358],[28, 360],[29, 360],[30, 362],[31, 361],[33, 362],[32, 363]])

export const light_pink_surface1 = n70
export const light_pink_ListItem = n70
export const light_pink_SelectTrigger = n70
export const light_pink_Card = n70
export const light_pink_Progress = n70
export const light_pink_TooltipArrow = n70
export const light_pink_SliderTrack = n70
export const light_pink_Input = n70
export const light_pink_TextArea = n70
export const light_pink_alt1_ListItem = n70
export const light_pink_alt1_SelectTrigger = n70
export const light_pink_alt1_Card = n70
export const light_pink_alt1_Progress = n70
export const light_pink_alt1_TooltipArrow = n70
export const light_pink_alt1_SliderTrack = n70
export const light_pink_alt1_Input = n70
export const light_pink_alt1_TextArea = n70
export const light_pink_alt2_ListItem = n70
export const light_pink_alt2_SelectTrigger = n70
export const light_pink_alt2_Card = n70
export const light_pink_alt2_Progress = n70
export const light_pink_alt2_TooltipArrow = n70
export const light_pink_alt2_SliderTrack = n70
export const light_pink_alt2_Input = n70
export const light_pink_alt2_TextArea = n70
export const light_pink_surface1_ListItem = n70
export const light_pink_surface1_SelectTrigger = n70
export const light_pink_surface1_Card = n70
export const light_pink_surface1_Progress = n70
export const light_pink_surface1_TooltipArrow = n70
export const light_pink_surface1_SliderTrack = n70
export const light_pink_surface1_Input = n70
export const light_pink_surface1_TextArea = n70
export const light_pink_surface2_ListItem = n70
export const light_pink_surface2_SelectTrigger = n70
export const light_pink_surface2_Card = n70
export const light_pink_surface2_Progress = n70
export const light_pink_surface2_TooltipArrow = n70
export const light_pink_surface2_SliderTrack = n70
export const light_pink_surface2_Input = n70
export const light_pink_surface2_TextArea = n70
export const light_pink_surface3_ListItem = n70
export const light_pink_surface3_SelectTrigger = n70
export const light_pink_surface3_Card = n70
export const light_pink_surface3_Progress = n70
export const light_pink_surface3_TooltipArrow = n70
export const light_pink_surface3_SliderTrack = n70
export const light_pink_surface3_Input = n70
export const light_pink_surface3_TextArea = n70
const n71 = t([[26, 360],[27, 359],[28, 361],[29, 361],[30, 363],[31, 362],[33, 363],[32, 364]])

export const light_pink_surface2 = n71
export const light_pink_Checkbox = n71
export const light_pink_Switch = n71
export const light_pink_TooltipContent = n71
export const light_pink_RadioGroupItem = n71
export const light_pink_alt1_Checkbox = n71
export const light_pink_alt1_Switch = n71
export const light_pink_alt1_TooltipContent = n71
export const light_pink_alt1_RadioGroupItem = n71
export const light_pink_alt2_Checkbox = n71
export const light_pink_alt2_Switch = n71
export const light_pink_alt2_TooltipContent = n71
export const light_pink_alt2_RadioGroupItem = n71
export const light_pink_surface1_Checkbox = n71
export const light_pink_surface1_Switch = n71
export const light_pink_surface1_TooltipContent = n71
export const light_pink_surface1_RadioGroupItem = n71
export const light_pink_surface2_Checkbox = n71
export const light_pink_surface2_Switch = n71
export const light_pink_surface2_TooltipContent = n71
export const light_pink_surface2_RadioGroupItem = n71
export const light_pink_surface3_Checkbox = n71
export const light_pink_surface3_Switch = n71
export const light_pink_surface3_TooltipContent = n71
export const light_pink_surface3_RadioGroupItem = n71
const n72 = t([[26, 361],[27, 360],[28, 362],[29, 362],[30, 364],[31, 363],[33, 364],[32, 365]])

export const light_pink_surface3 = n72
export const light_pink_Button = n72
export const light_pink_SliderTrackActive = n72
export const light_pink_alt1_Button = n72
export const light_pink_alt1_SliderTrackActive = n72
export const light_pink_alt2_Button = n72
export const light_pink_alt2_SliderTrackActive = n72
export const light_pink_surface1_Button = n72
export const light_pink_surface1_SliderTrackActive = n72
export const light_pink_surface2_Button = n72
export const light_pink_surface2_SliderTrackActive = n72
export const light_pink_surface3_Button = n72
export const light_pink_surface3_SliderTrackActive = n72
const n73 = t([[34, 388],[35, 387],[36, 388],[37, 387]])

export const light_tan_alt1 = n73
const n74 = t([[34, 387],[35, 386],[36, 387],[37, 386]])

export const light_tan_alt2 = n74
const n75 = t([[26, 379],[27, 378],[28, 380],[29, 380],[30, 382],[31, 381],[33, 382],[32, 383]])

export const light_tan_surface1 = n75
export const light_tan_ListItem = n75
export const light_tan_SelectTrigger = n75
export const light_tan_Card = n75
export const light_tan_Progress = n75
export const light_tan_TooltipArrow = n75
export const light_tan_SliderTrack = n75
export const light_tan_Input = n75
export const light_tan_TextArea = n75
export const light_tan_alt1_ListItem = n75
export const light_tan_alt1_SelectTrigger = n75
export const light_tan_alt1_Card = n75
export const light_tan_alt1_Progress = n75
export const light_tan_alt1_TooltipArrow = n75
export const light_tan_alt1_SliderTrack = n75
export const light_tan_alt1_Input = n75
export const light_tan_alt1_TextArea = n75
export const light_tan_alt2_ListItem = n75
export const light_tan_alt2_SelectTrigger = n75
export const light_tan_alt2_Card = n75
export const light_tan_alt2_Progress = n75
export const light_tan_alt2_TooltipArrow = n75
export const light_tan_alt2_SliderTrack = n75
export const light_tan_alt2_Input = n75
export const light_tan_alt2_TextArea = n75
export const light_tan_surface1_ListItem = n75
export const light_tan_surface1_SelectTrigger = n75
export const light_tan_surface1_Card = n75
export const light_tan_surface1_Progress = n75
export const light_tan_surface1_TooltipArrow = n75
export const light_tan_surface1_SliderTrack = n75
export const light_tan_surface1_Input = n75
export const light_tan_surface1_TextArea = n75
export const light_tan_surface2_ListItem = n75
export const light_tan_surface2_SelectTrigger = n75
export const light_tan_surface2_Card = n75
export const light_tan_surface2_Progress = n75
export const light_tan_surface2_TooltipArrow = n75
export const light_tan_surface2_SliderTrack = n75
export const light_tan_surface2_Input = n75
export const light_tan_surface2_TextArea = n75
export const light_tan_surface3_ListItem = n75
export const light_tan_surface3_SelectTrigger = n75
export const light_tan_surface3_Card = n75
export const light_tan_surface3_Progress = n75
export const light_tan_surface3_TooltipArrow = n75
export const light_tan_surface3_SliderTrack = n75
export const light_tan_surface3_Input = n75
export const light_tan_surface3_TextArea = n75
const n76 = t([[26, 380],[27, 379],[28, 381],[29, 381],[30, 383],[31, 382],[33, 383],[32, 384]])

export const light_tan_surface2 = n76
export const light_tan_Checkbox = n76
export const light_tan_Switch = n76
export const light_tan_TooltipContent = n76
export const light_tan_RadioGroupItem = n76
export const light_tan_alt1_Checkbox = n76
export const light_tan_alt1_Switch = n76
export const light_tan_alt1_TooltipContent = n76
export const light_tan_alt1_RadioGroupItem = n76
export const light_tan_alt2_Checkbox = n76
export const light_tan_alt2_Switch = n76
export const light_tan_alt2_TooltipContent = n76
export const light_tan_alt2_RadioGroupItem = n76
export const light_tan_surface1_Checkbox = n76
export const light_tan_surface1_Switch = n76
export const light_tan_surface1_TooltipContent = n76
export const light_tan_surface1_RadioGroupItem = n76
export const light_tan_surface2_Checkbox = n76
export const light_tan_surface2_Switch = n76
export const light_tan_surface2_TooltipContent = n76
export const light_tan_surface2_RadioGroupItem = n76
export const light_tan_surface3_Checkbox = n76
export const light_tan_surface3_Switch = n76
export const light_tan_surface3_TooltipContent = n76
export const light_tan_surface3_RadioGroupItem = n76
const n77 = t([[26, 381],[27, 380],[28, 382],[29, 382],[30, 384],[31, 383],[33, 384],[32, 385]])

export const light_tan_surface3 = n77
export const light_tan_Button = n77
export const light_tan_SliderTrackActive = n77
export const light_tan_alt1_Button = n77
export const light_tan_alt1_SliderTrackActive = n77
export const light_tan_alt2_Button = n77
export const light_tan_alt2_SliderTrackActive = n77
export const light_tan_surface1_Button = n77
export const light_tan_surface1_SliderTrackActive = n77
export const light_tan_surface2_Button = n77
export const light_tan_surface2_SliderTrackActive = n77
export const light_tan_surface3_Button = n77
export const light_tan_surface3_SliderTrackActive = n77
const n78 = t([[34, 399],[35, 398],[36, 399],[37, 398]])

export const dark_gray_alt1 = n78
const n79 = t([[34, 398],[35, 234],[36, 398],[37, 234]])

export const dark_gray_alt2 = n79
const n80 = t([[26, 394],[27, 0],[28, 19],[29, 19],[30, 395],[31, 130],[33, 395],[32, 129]])

export const dark_gray_surface1 = n80
export const dark_gray_ListItem = n80
export const dark_gray_SelectTrigger = n80
export const dark_gray_Card = n80
export const dark_gray_Progress = n80
export const dark_gray_TooltipArrow = n80
export const dark_gray_SliderTrack = n80
export const dark_gray_Input = n80
export const dark_gray_TextArea = n80
export const dark_gray_alt1_ListItem = n80
export const dark_gray_alt1_SelectTrigger = n80
export const dark_gray_alt1_Card = n80
export const dark_gray_alt1_Progress = n80
export const dark_gray_alt1_TooltipArrow = n80
export const dark_gray_alt1_SliderTrack = n80
export const dark_gray_alt1_Input = n80
export const dark_gray_alt1_TextArea = n80
export const dark_gray_alt2_ListItem = n80
export const dark_gray_alt2_SelectTrigger = n80
export const dark_gray_alt2_Card = n80
export const dark_gray_alt2_Progress = n80
export const dark_gray_alt2_TooltipArrow = n80
export const dark_gray_alt2_SliderTrack = n80
export const dark_gray_alt2_Input = n80
export const dark_gray_alt2_TextArea = n80
export const dark_gray_surface1_ListItem = n80
export const dark_gray_surface1_SelectTrigger = n80
export const dark_gray_surface1_Card = n80
export const dark_gray_surface1_Progress = n80
export const dark_gray_surface1_TooltipArrow = n80
export const dark_gray_surface1_SliderTrack = n80
export const dark_gray_surface1_Input = n80
export const dark_gray_surface1_TextArea = n80
export const dark_gray_surface2_ListItem = n80
export const dark_gray_surface2_SelectTrigger = n80
export const dark_gray_surface2_Card = n80
export const dark_gray_surface2_Progress = n80
export const dark_gray_surface2_TooltipArrow = n80
export const dark_gray_surface2_SliderTrack = n80
export const dark_gray_surface2_Input = n80
export const dark_gray_surface2_TextArea = n80
export const dark_gray_surface3_ListItem = n80
export const dark_gray_surface3_SelectTrigger = n80
export const dark_gray_surface3_Card = n80
export const dark_gray_surface3_Progress = n80
export const dark_gray_surface3_TooltipArrow = n80
export const dark_gray_surface3_SliderTrack = n80
export const dark_gray_surface3_Input = n80
export const dark_gray_surface3_TextArea = n80
const n81 = t([[26, 0],[27, 129],[28, 394],[29, 394],[30, 130],[31, 396],[33, 130],[32, 395]])

export const dark_gray_surface2 = n81
export const dark_gray_Checkbox = n81
export const dark_gray_Switch = n81
export const dark_gray_TooltipContent = n81
export const dark_gray_RadioGroupItem = n81
export const dark_gray_alt1_Checkbox = n81
export const dark_gray_alt1_Switch = n81
export const dark_gray_alt1_TooltipContent = n81
export const dark_gray_alt1_RadioGroupItem = n81
export const dark_gray_alt2_Checkbox = n81
export const dark_gray_alt2_Switch = n81
export const dark_gray_alt2_TooltipContent = n81
export const dark_gray_alt2_RadioGroupItem = n81
export const dark_gray_surface1_Checkbox = n81
export const dark_gray_surface1_Switch = n81
export const dark_gray_surface1_TooltipContent = n81
export const dark_gray_surface1_RadioGroupItem = n81
export const dark_gray_surface2_Checkbox = n81
export const dark_gray_surface2_Switch = n81
export const dark_gray_surface2_TooltipContent = n81
export const dark_gray_surface2_RadioGroupItem = n81
export const dark_gray_surface3_Checkbox = n81
export const dark_gray_surface3_Switch = n81
export const dark_gray_surface3_TooltipContent = n81
export const dark_gray_surface3_RadioGroupItem = n81
const n82 = t([[26, 129],[27, 395],[28, 0],[29, 0],[30, 396],[31, 397],[33, 396],[32, 130]])

export const dark_gray_surface3 = n82
export const dark_gray_Button = n82
export const dark_gray_SliderTrackActive = n82
export const dark_gray_alt1_Button = n82
export const dark_gray_alt1_SliderTrackActive = n82
export const dark_gray_alt2_Button = n82
export const dark_gray_alt2_SliderTrackActive = n82
export const dark_gray_surface1_Button = n82
export const dark_gray_surface1_SliderTrackActive = n82
export const dark_gray_surface2_Button = n82
export const dark_gray_surface2_SliderTrackActive = n82
export const dark_gray_surface3_Button = n82
export const dark_gray_surface3_SliderTrackActive = n82
const n83 = t([[34, 417],[35, 416],[36, 417],[37, 416]])

export const dark_blue_alt1 = n83
const n84 = t([[34, 416],[35, 247],[36, 416],[37, 247]])

export const dark_blue_alt2 = n84
const n85 = t([[26, 409],[27, 410],[28, 408],[29, 408],[30, 412],[31, 413],[33, 412],[32, 411]])

export const dark_blue_surface1 = n85
export const dark_blue_ListItem = n85
export const dark_blue_SelectTrigger = n85
export const dark_blue_Card = n85
export const dark_blue_Progress = n85
export const dark_blue_TooltipArrow = n85
export const dark_blue_SliderTrack = n85
export const dark_blue_Input = n85
export const dark_blue_TextArea = n85
export const dark_blue_alt1_ListItem = n85
export const dark_blue_alt1_SelectTrigger = n85
export const dark_blue_alt1_Card = n85
export const dark_blue_alt1_Progress = n85
export const dark_blue_alt1_TooltipArrow = n85
export const dark_blue_alt1_SliderTrack = n85
export const dark_blue_alt1_Input = n85
export const dark_blue_alt1_TextArea = n85
export const dark_blue_alt2_ListItem = n85
export const dark_blue_alt2_SelectTrigger = n85
export const dark_blue_alt2_Card = n85
export const dark_blue_alt2_Progress = n85
export const dark_blue_alt2_TooltipArrow = n85
export const dark_blue_alt2_SliderTrack = n85
export const dark_blue_alt2_Input = n85
export const dark_blue_alt2_TextArea = n85
export const dark_blue_surface1_ListItem = n85
export const dark_blue_surface1_SelectTrigger = n85
export const dark_blue_surface1_Card = n85
export const dark_blue_surface1_Progress = n85
export const dark_blue_surface1_TooltipArrow = n85
export const dark_blue_surface1_SliderTrack = n85
export const dark_blue_surface1_Input = n85
export const dark_blue_surface1_TextArea = n85
export const dark_blue_surface2_ListItem = n85
export const dark_blue_surface2_SelectTrigger = n85
export const dark_blue_surface2_Card = n85
export const dark_blue_surface2_Progress = n85
export const dark_blue_surface2_TooltipArrow = n85
export const dark_blue_surface2_SliderTrack = n85
export const dark_blue_surface2_Input = n85
export const dark_blue_surface2_TextArea = n85
export const dark_blue_surface3_ListItem = n85
export const dark_blue_surface3_SelectTrigger = n85
export const dark_blue_surface3_Card = n85
export const dark_blue_surface3_Progress = n85
export const dark_blue_surface3_TooltipArrow = n85
export const dark_blue_surface3_SliderTrack = n85
export const dark_blue_surface3_Input = n85
export const dark_blue_surface3_TextArea = n85
const n86 = t([[26, 410],[27, 411],[28, 409],[29, 409],[30, 413],[31, 414],[33, 413],[32, 412]])

export const dark_blue_surface2 = n86
export const dark_blue_Checkbox = n86
export const dark_blue_Switch = n86
export const dark_blue_TooltipContent = n86
export const dark_blue_RadioGroupItem = n86
export const dark_blue_alt1_Checkbox = n86
export const dark_blue_alt1_Switch = n86
export const dark_blue_alt1_TooltipContent = n86
export const dark_blue_alt1_RadioGroupItem = n86
export const dark_blue_alt2_Checkbox = n86
export const dark_blue_alt2_Switch = n86
export const dark_blue_alt2_TooltipContent = n86
export const dark_blue_alt2_RadioGroupItem = n86
export const dark_blue_surface1_Checkbox = n86
export const dark_blue_surface1_Switch = n86
export const dark_blue_surface1_TooltipContent = n86
export const dark_blue_surface1_RadioGroupItem = n86
export const dark_blue_surface2_Checkbox = n86
export const dark_blue_surface2_Switch = n86
export const dark_blue_surface2_TooltipContent = n86
export const dark_blue_surface2_RadioGroupItem = n86
export const dark_blue_surface3_Checkbox = n86
export const dark_blue_surface3_Switch = n86
export const dark_blue_surface3_TooltipContent = n86
export const dark_blue_surface3_RadioGroupItem = n86
const n87 = t([[26, 411],[27, 412],[28, 410],[29, 410],[30, 414],[31, 415],[33, 414],[32, 413]])

export const dark_blue_surface3 = n87
export const dark_blue_Button = n87
export const dark_blue_SliderTrackActive = n87
export const dark_blue_alt1_Button = n87
export const dark_blue_alt1_SliderTrackActive = n87
export const dark_blue_alt2_Button = n87
export const dark_blue_alt2_SliderTrackActive = n87
export const dark_blue_surface1_Button = n87
export const dark_blue_surface1_SliderTrackActive = n87
export const dark_blue_surface2_Button = n87
export const dark_blue_surface2_SliderTrackActive = n87
export const dark_blue_surface3_Button = n87
export const dark_blue_surface3_SliderTrackActive = n87
const n88 = t([[34, 436],[35, 435],[36, 436],[37, 435]])

export const dark_orange_alt1 = n88
const n89 = t([[34, 435],[35, 267],[36, 435],[37, 267]])

export const dark_orange_alt2 = n89
const n90 = t([[26, 428],[27, 429],[28, 427],[29, 427],[30, 431],[31, 432],[33, 431],[32, 430]])

export const dark_orange_surface1 = n90
export const dark_orange_ListItem = n90
export const dark_orange_SelectTrigger = n90
export const dark_orange_Card = n90
export const dark_orange_Progress = n90
export const dark_orange_TooltipArrow = n90
export const dark_orange_SliderTrack = n90
export const dark_orange_Input = n90
export const dark_orange_TextArea = n90
export const dark_orange_alt1_ListItem = n90
export const dark_orange_alt1_SelectTrigger = n90
export const dark_orange_alt1_Card = n90
export const dark_orange_alt1_Progress = n90
export const dark_orange_alt1_TooltipArrow = n90
export const dark_orange_alt1_SliderTrack = n90
export const dark_orange_alt1_Input = n90
export const dark_orange_alt1_TextArea = n90
export const dark_orange_alt2_ListItem = n90
export const dark_orange_alt2_SelectTrigger = n90
export const dark_orange_alt2_Card = n90
export const dark_orange_alt2_Progress = n90
export const dark_orange_alt2_TooltipArrow = n90
export const dark_orange_alt2_SliderTrack = n90
export const dark_orange_alt2_Input = n90
export const dark_orange_alt2_TextArea = n90
export const dark_orange_surface1_ListItem = n90
export const dark_orange_surface1_SelectTrigger = n90
export const dark_orange_surface1_Card = n90
export const dark_orange_surface1_Progress = n90
export const dark_orange_surface1_TooltipArrow = n90
export const dark_orange_surface1_SliderTrack = n90
export const dark_orange_surface1_Input = n90
export const dark_orange_surface1_TextArea = n90
export const dark_orange_surface2_ListItem = n90
export const dark_orange_surface2_SelectTrigger = n90
export const dark_orange_surface2_Card = n90
export const dark_orange_surface2_Progress = n90
export const dark_orange_surface2_TooltipArrow = n90
export const dark_orange_surface2_SliderTrack = n90
export const dark_orange_surface2_Input = n90
export const dark_orange_surface2_TextArea = n90
export const dark_orange_surface3_ListItem = n90
export const dark_orange_surface3_SelectTrigger = n90
export const dark_orange_surface3_Card = n90
export const dark_orange_surface3_Progress = n90
export const dark_orange_surface3_TooltipArrow = n90
export const dark_orange_surface3_SliderTrack = n90
export const dark_orange_surface3_Input = n90
export const dark_orange_surface3_TextArea = n90
const n91 = t([[26, 429],[27, 430],[28, 428],[29, 428],[30, 432],[31, 433],[33, 432],[32, 431]])

export const dark_orange_surface2 = n91
export const dark_orange_Checkbox = n91
export const dark_orange_Switch = n91
export const dark_orange_TooltipContent = n91
export const dark_orange_RadioGroupItem = n91
export const dark_orange_alt1_Checkbox = n91
export const dark_orange_alt1_Switch = n91
export const dark_orange_alt1_TooltipContent = n91
export const dark_orange_alt1_RadioGroupItem = n91
export const dark_orange_alt2_Checkbox = n91
export const dark_orange_alt2_Switch = n91
export const dark_orange_alt2_TooltipContent = n91
export const dark_orange_alt2_RadioGroupItem = n91
export const dark_orange_surface1_Checkbox = n91
export const dark_orange_surface1_Switch = n91
export const dark_orange_surface1_TooltipContent = n91
export const dark_orange_surface1_RadioGroupItem = n91
export const dark_orange_surface2_Checkbox = n91
export const dark_orange_surface2_Switch = n91
export const dark_orange_surface2_TooltipContent = n91
export const dark_orange_surface2_RadioGroupItem = n91
export const dark_orange_surface3_Checkbox = n91
export const dark_orange_surface3_Switch = n91
export const dark_orange_surface3_TooltipContent = n91
export const dark_orange_surface3_RadioGroupItem = n91
const n92 = t([[26, 430],[27, 431],[28, 429],[29, 429],[30, 433],[31, 434],[33, 433],[32, 432]])

export const dark_orange_surface3 = n92
export const dark_orange_Button = n92
export const dark_orange_SliderTrackActive = n92
export const dark_orange_alt1_Button = n92
export const dark_orange_alt1_SliderTrackActive = n92
export const dark_orange_alt2_Button = n92
export const dark_orange_alt2_SliderTrackActive = n92
export const dark_orange_surface1_Button = n92
export const dark_orange_surface1_SliderTrackActive = n92
export const dark_orange_surface2_Button = n92
export const dark_orange_surface2_SliderTrackActive = n92
export const dark_orange_surface3_Button = n92
export const dark_orange_surface3_SliderTrackActive = n92
const n93 = t([[34, 455],[35, 454],[36, 455],[37, 454]])

export const dark_red_alt1 = n93
const n94 = t([[34, 454],[35, 286],[36, 454],[37, 286]])

export const dark_red_alt2 = n94
const n95 = t([[26, 447],[27, 448],[28, 446],[29, 446],[30, 450],[31, 451],[33, 450],[32, 449]])

export const dark_red_surface1 = n95
export const dark_red_ListItem = n95
export const dark_red_SelectTrigger = n95
export const dark_red_Card = n95
export const dark_red_Progress = n95
export const dark_red_TooltipArrow = n95
export const dark_red_SliderTrack = n95
export const dark_red_Input = n95
export const dark_red_TextArea = n95
export const dark_red_alt1_ListItem = n95
export const dark_red_alt1_SelectTrigger = n95
export const dark_red_alt1_Card = n95
export const dark_red_alt1_Progress = n95
export const dark_red_alt1_TooltipArrow = n95
export const dark_red_alt1_SliderTrack = n95
export const dark_red_alt1_Input = n95
export const dark_red_alt1_TextArea = n95
export const dark_red_alt2_ListItem = n95
export const dark_red_alt2_SelectTrigger = n95
export const dark_red_alt2_Card = n95
export const dark_red_alt2_Progress = n95
export const dark_red_alt2_TooltipArrow = n95
export const dark_red_alt2_SliderTrack = n95
export const dark_red_alt2_Input = n95
export const dark_red_alt2_TextArea = n95
export const dark_red_surface1_ListItem = n95
export const dark_red_surface1_SelectTrigger = n95
export const dark_red_surface1_Card = n95
export const dark_red_surface1_Progress = n95
export const dark_red_surface1_TooltipArrow = n95
export const dark_red_surface1_SliderTrack = n95
export const dark_red_surface1_Input = n95
export const dark_red_surface1_TextArea = n95
export const dark_red_surface2_ListItem = n95
export const dark_red_surface2_SelectTrigger = n95
export const dark_red_surface2_Card = n95
export const dark_red_surface2_Progress = n95
export const dark_red_surface2_TooltipArrow = n95
export const dark_red_surface2_SliderTrack = n95
export const dark_red_surface2_Input = n95
export const dark_red_surface2_TextArea = n95
export const dark_red_surface3_ListItem = n95
export const dark_red_surface3_SelectTrigger = n95
export const dark_red_surface3_Card = n95
export const dark_red_surface3_Progress = n95
export const dark_red_surface3_TooltipArrow = n95
export const dark_red_surface3_SliderTrack = n95
export const dark_red_surface3_Input = n95
export const dark_red_surface3_TextArea = n95
const n96 = t([[26, 448],[27, 449],[28, 447],[29, 447],[30, 451],[31, 452],[33, 451],[32, 450]])

export const dark_red_surface2 = n96
export const dark_red_Checkbox = n96
export const dark_red_Switch = n96
export const dark_red_TooltipContent = n96
export const dark_red_RadioGroupItem = n96
export const dark_red_alt1_Checkbox = n96
export const dark_red_alt1_Switch = n96
export const dark_red_alt1_TooltipContent = n96
export const dark_red_alt1_RadioGroupItem = n96
export const dark_red_alt2_Checkbox = n96
export const dark_red_alt2_Switch = n96
export const dark_red_alt2_TooltipContent = n96
export const dark_red_alt2_RadioGroupItem = n96
export const dark_red_surface1_Checkbox = n96
export const dark_red_surface1_Switch = n96
export const dark_red_surface1_TooltipContent = n96
export const dark_red_surface1_RadioGroupItem = n96
export const dark_red_surface2_Checkbox = n96
export const dark_red_surface2_Switch = n96
export const dark_red_surface2_TooltipContent = n96
export const dark_red_surface2_RadioGroupItem = n96
export const dark_red_surface3_Checkbox = n96
export const dark_red_surface3_Switch = n96
export const dark_red_surface3_TooltipContent = n96
export const dark_red_surface3_RadioGroupItem = n96
const n97 = t([[26, 449],[27, 450],[28, 448],[29, 448],[30, 452],[31, 453],[33, 452],[32, 451]])

export const dark_red_surface3 = n97
export const dark_red_Button = n97
export const dark_red_SliderTrackActive = n97
export const dark_red_alt1_Button = n97
export const dark_red_alt1_SliderTrackActive = n97
export const dark_red_alt2_Button = n97
export const dark_red_alt2_SliderTrackActive = n97
export const dark_red_surface1_Button = n97
export const dark_red_surface1_SliderTrackActive = n97
export const dark_red_surface2_Button = n97
export const dark_red_surface2_SliderTrackActive = n97
export const dark_red_surface3_Button = n97
export const dark_red_surface3_SliderTrackActive = n97
const n98 = t([[34, 474],[35, 473],[36, 474],[37, 473]])

export const dark_yellow_alt1 = n98
const n99 = t([[34, 473],[35, 306],[36, 473],[37, 306]])

export const dark_yellow_alt2 = n99
const n100 = t([[26, 466],[27, 467],[28, 465],[29, 465],[30, 469],[31, 470],[33, 469],[32, 468]])

export const dark_yellow_surface1 = n100
export const dark_yellow_ListItem = n100
export const dark_yellow_SelectTrigger = n100
export const dark_yellow_Card = n100
export const dark_yellow_Progress = n100
export const dark_yellow_TooltipArrow = n100
export const dark_yellow_SliderTrack = n100
export const dark_yellow_Input = n100
export const dark_yellow_TextArea = n100
export const dark_yellow_alt1_ListItem = n100
export const dark_yellow_alt1_SelectTrigger = n100
export const dark_yellow_alt1_Card = n100
export const dark_yellow_alt1_Progress = n100
export const dark_yellow_alt1_TooltipArrow = n100
export const dark_yellow_alt1_SliderTrack = n100
export const dark_yellow_alt1_Input = n100
export const dark_yellow_alt1_TextArea = n100
export const dark_yellow_alt2_ListItem = n100
export const dark_yellow_alt2_SelectTrigger = n100
export const dark_yellow_alt2_Card = n100
export const dark_yellow_alt2_Progress = n100
export const dark_yellow_alt2_TooltipArrow = n100
export const dark_yellow_alt2_SliderTrack = n100
export const dark_yellow_alt2_Input = n100
export const dark_yellow_alt2_TextArea = n100
export const dark_yellow_surface1_ListItem = n100
export const dark_yellow_surface1_SelectTrigger = n100
export const dark_yellow_surface1_Card = n100
export const dark_yellow_surface1_Progress = n100
export const dark_yellow_surface1_TooltipArrow = n100
export const dark_yellow_surface1_SliderTrack = n100
export const dark_yellow_surface1_Input = n100
export const dark_yellow_surface1_TextArea = n100
export const dark_yellow_surface2_ListItem = n100
export const dark_yellow_surface2_SelectTrigger = n100
export const dark_yellow_surface2_Card = n100
export const dark_yellow_surface2_Progress = n100
export const dark_yellow_surface2_TooltipArrow = n100
export const dark_yellow_surface2_SliderTrack = n100
export const dark_yellow_surface2_Input = n100
export const dark_yellow_surface2_TextArea = n100
export const dark_yellow_surface3_ListItem = n100
export const dark_yellow_surface3_SelectTrigger = n100
export const dark_yellow_surface3_Card = n100
export const dark_yellow_surface3_Progress = n100
export const dark_yellow_surface3_TooltipArrow = n100
export const dark_yellow_surface3_SliderTrack = n100
export const dark_yellow_surface3_Input = n100
export const dark_yellow_surface3_TextArea = n100
const n101 = t([[26, 467],[27, 468],[28, 466],[29, 466],[30, 470],[31, 471],[33, 470],[32, 469]])

export const dark_yellow_surface2 = n101
export const dark_yellow_Checkbox = n101
export const dark_yellow_Switch = n101
export const dark_yellow_TooltipContent = n101
export const dark_yellow_RadioGroupItem = n101
export const dark_yellow_alt1_Checkbox = n101
export const dark_yellow_alt1_Switch = n101
export const dark_yellow_alt1_TooltipContent = n101
export const dark_yellow_alt1_RadioGroupItem = n101
export const dark_yellow_alt2_Checkbox = n101
export const dark_yellow_alt2_Switch = n101
export const dark_yellow_alt2_TooltipContent = n101
export const dark_yellow_alt2_RadioGroupItem = n101
export const dark_yellow_surface1_Checkbox = n101
export const dark_yellow_surface1_Switch = n101
export const dark_yellow_surface1_TooltipContent = n101
export const dark_yellow_surface1_RadioGroupItem = n101
export const dark_yellow_surface2_Checkbox = n101
export const dark_yellow_surface2_Switch = n101
export const dark_yellow_surface2_TooltipContent = n101
export const dark_yellow_surface2_RadioGroupItem = n101
export const dark_yellow_surface3_Checkbox = n101
export const dark_yellow_surface3_Switch = n101
export const dark_yellow_surface3_TooltipContent = n101
export const dark_yellow_surface3_RadioGroupItem = n101
const n102 = t([[26, 468],[27, 469],[28, 467],[29, 467],[30, 471],[31, 472],[33, 471],[32, 470]])

export const dark_yellow_surface3 = n102
export const dark_yellow_Button = n102
export const dark_yellow_SliderTrackActive = n102
export const dark_yellow_alt1_Button = n102
export const dark_yellow_alt1_SliderTrackActive = n102
export const dark_yellow_alt2_Button = n102
export const dark_yellow_alt2_SliderTrackActive = n102
export const dark_yellow_surface1_Button = n102
export const dark_yellow_surface1_SliderTrackActive = n102
export const dark_yellow_surface2_Button = n102
export const dark_yellow_surface2_SliderTrackActive = n102
export const dark_yellow_surface3_Button = n102
export const dark_yellow_surface3_SliderTrackActive = n102
const n103 = t([[34, 493],[35, 492],[36, 493],[37, 492]])

export const dark_green_alt1 = n103
const n104 = t([[34, 492],[35, 326],[36, 492],[37, 326]])

export const dark_green_alt2 = n104
const n105 = t([[26, 485],[27, 486],[28, 484],[29, 484],[30, 488],[31, 489],[33, 488],[32, 487]])

export const dark_green_surface1 = n105
export const dark_green_ListItem = n105
export const dark_green_SelectTrigger = n105
export const dark_green_Card = n105
export const dark_green_Progress = n105
export const dark_green_TooltipArrow = n105
export const dark_green_SliderTrack = n105
export const dark_green_Input = n105
export const dark_green_TextArea = n105
export const dark_green_alt1_ListItem = n105
export const dark_green_alt1_SelectTrigger = n105
export const dark_green_alt1_Card = n105
export const dark_green_alt1_Progress = n105
export const dark_green_alt1_TooltipArrow = n105
export const dark_green_alt1_SliderTrack = n105
export const dark_green_alt1_Input = n105
export const dark_green_alt1_TextArea = n105
export const dark_green_alt2_ListItem = n105
export const dark_green_alt2_SelectTrigger = n105
export const dark_green_alt2_Card = n105
export const dark_green_alt2_Progress = n105
export const dark_green_alt2_TooltipArrow = n105
export const dark_green_alt2_SliderTrack = n105
export const dark_green_alt2_Input = n105
export const dark_green_alt2_TextArea = n105
export const dark_green_surface1_ListItem = n105
export const dark_green_surface1_SelectTrigger = n105
export const dark_green_surface1_Card = n105
export const dark_green_surface1_Progress = n105
export const dark_green_surface1_TooltipArrow = n105
export const dark_green_surface1_SliderTrack = n105
export const dark_green_surface1_Input = n105
export const dark_green_surface1_TextArea = n105
export const dark_green_surface2_ListItem = n105
export const dark_green_surface2_SelectTrigger = n105
export const dark_green_surface2_Card = n105
export const dark_green_surface2_Progress = n105
export const dark_green_surface2_TooltipArrow = n105
export const dark_green_surface2_SliderTrack = n105
export const dark_green_surface2_Input = n105
export const dark_green_surface2_TextArea = n105
export const dark_green_surface3_ListItem = n105
export const dark_green_surface3_SelectTrigger = n105
export const dark_green_surface3_Card = n105
export const dark_green_surface3_Progress = n105
export const dark_green_surface3_TooltipArrow = n105
export const dark_green_surface3_SliderTrack = n105
export const dark_green_surface3_Input = n105
export const dark_green_surface3_TextArea = n105
const n106 = t([[26, 486],[27, 487],[28, 485],[29, 485],[30, 489],[31, 490],[33, 489],[32, 488]])

export const dark_green_surface2 = n106
export const dark_green_Checkbox = n106
export const dark_green_Switch = n106
export const dark_green_TooltipContent = n106
export const dark_green_RadioGroupItem = n106
export const dark_green_alt1_Checkbox = n106
export const dark_green_alt1_Switch = n106
export const dark_green_alt1_TooltipContent = n106
export const dark_green_alt1_RadioGroupItem = n106
export const dark_green_alt2_Checkbox = n106
export const dark_green_alt2_Switch = n106
export const dark_green_alt2_TooltipContent = n106
export const dark_green_alt2_RadioGroupItem = n106
export const dark_green_surface1_Checkbox = n106
export const dark_green_surface1_Switch = n106
export const dark_green_surface1_TooltipContent = n106
export const dark_green_surface1_RadioGroupItem = n106
export const dark_green_surface2_Checkbox = n106
export const dark_green_surface2_Switch = n106
export const dark_green_surface2_TooltipContent = n106
export const dark_green_surface2_RadioGroupItem = n106
export const dark_green_surface3_Checkbox = n106
export const dark_green_surface3_Switch = n106
export const dark_green_surface3_TooltipContent = n106
export const dark_green_surface3_RadioGroupItem = n106
const n107 = t([[26, 487],[27, 488],[28, 486],[29, 486],[30, 490],[31, 491],[33, 490],[32, 489]])

export const dark_green_surface3 = n107
export const dark_green_Button = n107
export const dark_green_SliderTrackActive = n107
export const dark_green_alt1_Button = n107
export const dark_green_alt1_SliderTrackActive = n107
export const dark_green_alt2_Button = n107
export const dark_green_alt2_SliderTrackActive = n107
export const dark_green_surface1_Button = n107
export const dark_green_surface1_SliderTrackActive = n107
export const dark_green_surface2_Button = n107
export const dark_green_surface2_SliderTrackActive = n107
export const dark_green_surface3_Button = n107
export const dark_green_surface3_SliderTrackActive = n107
const n108 = t([[34, 512],[35, 511],[36, 512],[37, 511]])

export const dark_purple_alt1 = n108
const n109 = t([[34, 511],[35, 346],[36, 511],[37, 346]])

export const dark_purple_alt2 = n109
const n110 = t([[26, 504],[27, 505],[28, 503],[29, 503],[30, 507],[31, 508],[33, 507],[32, 506]])

export const dark_purple_surface1 = n110
export const dark_purple_ListItem = n110
export const dark_purple_SelectTrigger = n110
export const dark_purple_Card = n110
export const dark_purple_Progress = n110
export const dark_purple_TooltipArrow = n110
export const dark_purple_SliderTrack = n110
export const dark_purple_Input = n110
export const dark_purple_TextArea = n110
export const dark_purple_alt1_ListItem = n110
export const dark_purple_alt1_SelectTrigger = n110
export const dark_purple_alt1_Card = n110
export const dark_purple_alt1_Progress = n110
export const dark_purple_alt1_TooltipArrow = n110
export const dark_purple_alt1_SliderTrack = n110
export const dark_purple_alt1_Input = n110
export const dark_purple_alt1_TextArea = n110
export const dark_purple_alt2_ListItem = n110
export const dark_purple_alt2_SelectTrigger = n110
export const dark_purple_alt2_Card = n110
export const dark_purple_alt2_Progress = n110
export const dark_purple_alt2_TooltipArrow = n110
export const dark_purple_alt2_SliderTrack = n110
export const dark_purple_alt2_Input = n110
export const dark_purple_alt2_TextArea = n110
export const dark_purple_surface1_ListItem = n110
export const dark_purple_surface1_SelectTrigger = n110
export const dark_purple_surface1_Card = n110
export const dark_purple_surface1_Progress = n110
export const dark_purple_surface1_TooltipArrow = n110
export const dark_purple_surface1_SliderTrack = n110
export const dark_purple_surface1_Input = n110
export const dark_purple_surface1_TextArea = n110
export const dark_purple_surface2_ListItem = n110
export const dark_purple_surface2_SelectTrigger = n110
export const dark_purple_surface2_Card = n110
export const dark_purple_surface2_Progress = n110
export const dark_purple_surface2_TooltipArrow = n110
export const dark_purple_surface2_SliderTrack = n110
export const dark_purple_surface2_Input = n110
export const dark_purple_surface2_TextArea = n110
export const dark_purple_surface3_ListItem = n110
export const dark_purple_surface3_SelectTrigger = n110
export const dark_purple_surface3_Card = n110
export const dark_purple_surface3_Progress = n110
export const dark_purple_surface3_TooltipArrow = n110
export const dark_purple_surface3_SliderTrack = n110
export const dark_purple_surface3_Input = n110
export const dark_purple_surface3_TextArea = n110
const n111 = t([[26, 505],[27, 506],[28, 504],[29, 504],[30, 508],[31, 509],[33, 508],[32, 507]])

export const dark_purple_surface2 = n111
export const dark_purple_Checkbox = n111
export const dark_purple_Switch = n111
export const dark_purple_TooltipContent = n111
export const dark_purple_RadioGroupItem = n111
export const dark_purple_alt1_Checkbox = n111
export const dark_purple_alt1_Switch = n111
export const dark_purple_alt1_TooltipContent = n111
export const dark_purple_alt1_RadioGroupItem = n111
export const dark_purple_alt2_Checkbox = n111
export const dark_purple_alt2_Switch = n111
export const dark_purple_alt2_TooltipContent = n111
export const dark_purple_alt2_RadioGroupItem = n111
export const dark_purple_surface1_Checkbox = n111
export const dark_purple_surface1_Switch = n111
export const dark_purple_surface1_TooltipContent = n111
export const dark_purple_surface1_RadioGroupItem = n111
export const dark_purple_surface2_Checkbox = n111
export const dark_purple_surface2_Switch = n111
export const dark_purple_surface2_TooltipContent = n111
export const dark_purple_surface2_RadioGroupItem = n111
export const dark_purple_surface3_Checkbox = n111
export const dark_purple_surface3_Switch = n111
export const dark_purple_surface3_TooltipContent = n111
export const dark_purple_surface3_RadioGroupItem = n111
const n112 = t([[26, 506],[27, 507],[28, 505],[29, 505],[30, 509],[31, 510],[33, 509],[32, 508]])

export const dark_purple_surface3 = n112
export const dark_purple_Button = n112
export const dark_purple_SliderTrackActive = n112
export const dark_purple_alt1_Button = n112
export const dark_purple_alt1_SliderTrackActive = n112
export const dark_purple_alt2_Button = n112
export const dark_purple_alt2_SliderTrackActive = n112
export const dark_purple_surface1_Button = n112
export const dark_purple_surface1_SliderTrackActive = n112
export const dark_purple_surface2_Button = n112
export const dark_purple_surface2_SliderTrackActive = n112
export const dark_purple_surface3_Button = n112
export const dark_purple_surface3_SliderTrackActive = n112
const n113 = t([[34, 531],[35, 530],[36, 531],[37, 530]])

export const dark_pink_alt1 = n113
const n114 = t([[34, 530],[35, 366],[36, 530],[37, 366]])

export const dark_pink_alt2 = n114
const n115 = t([[26, 523],[27, 524],[28, 522],[29, 522],[30, 526],[31, 527],[33, 526],[32, 525]])

export const dark_pink_surface1 = n115
export const dark_pink_ListItem = n115
export const dark_pink_SelectTrigger = n115
export const dark_pink_Card = n115
export const dark_pink_Progress = n115
export const dark_pink_TooltipArrow = n115
export const dark_pink_SliderTrack = n115
export const dark_pink_Input = n115
export const dark_pink_TextArea = n115
export const dark_pink_alt1_ListItem = n115
export const dark_pink_alt1_SelectTrigger = n115
export const dark_pink_alt1_Card = n115
export const dark_pink_alt1_Progress = n115
export const dark_pink_alt1_TooltipArrow = n115
export const dark_pink_alt1_SliderTrack = n115
export const dark_pink_alt1_Input = n115
export const dark_pink_alt1_TextArea = n115
export const dark_pink_alt2_ListItem = n115
export const dark_pink_alt2_SelectTrigger = n115
export const dark_pink_alt2_Card = n115
export const dark_pink_alt2_Progress = n115
export const dark_pink_alt2_TooltipArrow = n115
export const dark_pink_alt2_SliderTrack = n115
export const dark_pink_alt2_Input = n115
export const dark_pink_alt2_TextArea = n115
export const dark_pink_surface1_ListItem = n115
export const dark_pink_surface1_SelectTrigger = n115
export const dark_pink_surface1_Card = n115
export const dark_pink_surface1_Progress = n115
export const dark_pink_surface1_TooltipArrow = n115
export const dark_pink_surface1_SliderTrack = n115
export const dark_pink_surface1_Input = n115
export const dark_pink_surface1_TextArea = n115
export const dark_pink_surface2_ListItem = n115
export const dark_pink_surface2_SelectTrigger = n115
export const dark_pink_surface2_Card = n115
export const dark_pink_surface2_Progress = n115
export const dark_pink_surface2_TooltipArrow = n115
export const dark_pink_surface2_SliderTrack = n115
export const dark_pink_surface2_Input = n115
export const dark_pink_surface2_TextArea = n115
export const dark_pink_surface3_ListItem = n115
export const dark_pink_surface3_SelectTrigger = n115
export const dark_pink_surface3_Card = n115
export const dark_pink_surface3_Progress = n115
export const dark_pink_surface3_TooltipArrow = n115
export const dark_pink_surface3_SliderTrack = n115
export const dark_pink_surface3_Input = n115
export const dark_pink_surface3_TextArea = n115
const n116 = t([[26, 524],[27, 525],[28, 523],[29, 523],[30, 527],[31, 528],[33, 527],[32, 526]])

export const dark_pink_surface2 = n116
export const dark_pink_Checkbox = n116
export const dark_pink_Switch = n116
export const dark_pink_TooltipContent = n116
export const dark_pink_RadioGroupItem = n116
export const dark_pink_alt1_Checkbox = n116
export const dark_pink_alt1_Switch = n116
export const dark_pink_alt1_TooltipContent = n116
export const dark_pink_alt1_RadioGroupItem = n116
export const dark_pink_alt2_Checkbox = n116
export const dark_pink_alt2_Switch = n116
export const dark_pink_alt2_TooltipContent = n116
export const dark_pink_alt2_RadioGroupItem = n116
export const dark_pink_surface1_Checkbox = n116
export const dark_pink_surface1_Switch = n116
export const dark_pink_surface1_TooltipContent = n116
export const dark_pink_surface1_RadioGroupItem = n116
export const dark_pink_surface2_Checkbox = n116
export const dark_pink_surface2_Switch = n116
export const dark_pink_surface2_TooltipContent = n116
export const dark_pink_surface2_RadioGroupItem = n116
export const dark_pink_surface3_Checkbox = n116
export const dark_pink_surface3_Switch = n116
export const dark_pink_surface3_TooltipContent = n116
export const dark_pink_surface3_RadioGroupItem = n116
const n117 = t([[26, 525],[27, 526],[28, 524],[29, 524],[30, 528],[31, 529],[33, 528],[32, 527]])

export const dark_pink_surface3 = n117
export const dark_pink_Button = n117
export const dark_pink_SliderTrackActive = n117
export const dark_pink_alt1_Button = n117
export const dark_pink_alt1_SliderTrackActive = n117
export const dark_pink_alt2_Button = n117
export const dark_pink_alt2_SliderTrackActive = n117
export const dark_pink_surface1_Button = n117
export const dark_pink_surface1_SliderTrackActive = n117
export const dark_pink_surface2_Button = n117
export const dark_pink_surface2_SliderTrackActive = n117
export const dark_pink_surface3_Button = n117
export const dark_pink_surface3_SliderTrackActive = n117
const n118 = t([[34, 551],[35, 550],[36, 551],[37, 550]])

export const dark_tan_alt1 = n118
const n119 = t([[34, 550],[35, 549],[36, 550],[37, 549]])

export const dark_tan_alt2 = n119
const n120 = t([[26, 542],[27, 543],[28, 541],[29, 541],[30, 545],[31, 546],[33, 545],[32, 544]])

export const dark_tan_surface1 = n120
export const dark_tan_ListItem = n120
export const dark_tan_SelectTrigger = n120
export const dark_tan_Card = n120
export const dark_tan_Progress = n120
export const dark_tan_TooltipArrow = n120
export const dark_tan_SliderTrack = n120
export const dark_tan_Input = n120
export const dark_tan_TextArea = n120
export const dark_tan_alt1_ListItem = n120
export const dark_tan_alt1_SelectTrigger = n120
export const dark_tan_alt1_Card = n120
export const dark_tan_alt1_Progress = n120
export const dark_tan_alt1_TooltipArrow = n120
export const dark_tan_alt1_SliderTrack = n120
export const dark_tan_alt1_Input = n120
export const dark_tan_alt1_TextArea = n120
export const dark_tan_alt2_ListItem = n120
export const dark_tan_alt2_SelectTrigger = n120
export const dark_tan_alt2_Card = n120
export const dark_tan_alt2_Progress = n120
export const dark_tan_alt2_TooltipArrow = n120
export const dark_tan_alt2_SliderTrack = n120
export const dark_tan_alt2_Input = n120
export const dark_tan_alt2_TextArea = n120
export const dark_tan_surface1_ListItem = n120
export const dark_tan_surface1_SelectTrigger = n120
export const dark_tan_surface1_Card = n120
export const dark_tan_surface1_Progress = n120
export const dark_tan_surface1_TooltipArrow = n120
export const dark_tan_surface1_SliderTrack = n120
export const dark_tan_surface1_Input = n120
export const dark_tan_surface1_TextArea = n120
export const dark_tan_surface2_ListItem = n120
export const dark_tan_surface2_SelectTrigger = n120
export const dark_tan_surface2_Card = n120
export const dark_tan_surface2_Progress = n120
export const dark_tan_surface2_TooltipArrow = n120
export const dark_tan_surface2_SliderTrack = n120
export const dark_tan_surface2_Input = n120
export const dark_tan_surface2_TextArea = n120
export const dark_tan_surface3_ListItem = n120
export const dark_tan_surface3_SelectTrigger = n120
export const dark_tan_surface3_Card = n120
export const dark_tan_surface3_Progress = n120
export const dark_tan_surface3_TooltipArrow = n120
export const dark_tan_surface3_SliderTrack = n120
export const dark_tan_surface3_Input = n120
export const dark_tan_surface3_TextArea = n120
const n121 = t([[26, 543],[27, 544],[28, 542],[29, 542],[30, 546],[31, 547],[33, 546],[32, 545]])

export const dark_tan_surface2 = n121
export const dark_tan_Checkbox = n121
export const dark_tan_Switch = n121
export const dark_tan_TooltipContent = n121
export const dark_tan_RadioGroupItem = n121
export const dark_tan_alt1_Checkbox = n121
export const dark_tan_alt1_Switch = n121
export const dark_tan_alt1_TooltipContent = n121
export const dark_tan_alt1_RadioGroupItem = n121
export const dark_tan_alt2_Checkbox = n121
export const dark_tan_alt2_Switch = n121
export const dark_tan_alt2_TooltipContent = n121
export const dark_tan_alt2_RadioGroupItem = n121
export const dark_tan_surface1_Checkbox = n121
export const dark_tan_surface1_Switch = n121
export const dark_tan_surface1_TooltipContent = n121
export const dark_tan_surface1_RadioGroupItem = n121
export const dark_tan_surface2_Checkbox = n121
export const dark_tan_surface2_Switch = n121
export const dark_tan_surface2_TooltipContent = n121
export const dark_tan_surface2_RadioGroupItem = n121
export const dark_tan_surface3_Checkbox = n121
export const dark_tan_surface3_Switch = n121
export const dark_tan_surface3_TooltipContent = n121
export const dark_tan_surface3_RadioGroupItem = n121
const n122 = t([[26, 544],[27, 545],[28, 543],[29, 543],[30, 547],[31, 548],[33, 547],[32, 546]])

export const dark_tan_surface3 = n122
export const dark_tan_Button = n122
export const dark_tan_SliderTrackActive = n122
export const dark_tan_alt1_Button = n122
export const dark_tan_alt1_SliderTrackActive = n122
export const dark_tan_alt2_Button = n122
export const dark_tan_alt2_SliderTrackActive = n122
export const dark_tan_surface1_Button = n122
export const dark_tan_surface1_SliderTrackActive = n122
export const dark_tan_surface2_Button = n122
export const dark_tan_surface2_SliderTrackActive = n122
export const dark_tan_surface3_Button = n122
export const dark_tan_surface3_SliderTrackActive = n122
const n123 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 20],[7, 21],[8, 22],[9, 23],[10, 19],[11, 18],[12, 17],[13, 16],[14, 15],[15, 14],[16, 13],[17, 12],[18, 11],[19, 10],[20, 9],[21, 8],[22, 4],[23, 5],[24, 6],[25, 7],[26, 19],[27, 23],[28, 18],[29, 18],[30, 16],[31, 17],[32, 15],[33, 16],[34, 8],[35, 9],[36, 8],[37, 9],[38, 4],[39, 11],[40, 5]])

export const light_SwitchThumb = n123
export const light_SliderThumb = n123
export const light_Tooltip = n123
export const light_ProgressIndicator = n123
export const light_alt1_SwitchThumb = n123
export const light_alt1_SliderThumb = n123
export const light_alt1_Tooltip = n123
export const light_alt1_ProgressIndicator = n123
export const light_alt2_SwitchThumb = n123
export const light_alt2_SliderThumb = n123
export const light_alt2_Tooltip = n123
export const light_alt2_ProgressIndicator = n123
export const light_surface1_SwitchThumb = n123
export const light_surface1_SliderThumb = n123
export const light_surface1_Tooltip = n123
export const light_surface1_ProgressIndicator = n123
export const light_surface2_SwitchThumb = n123
export const light_surface2_SliderThumb = n123
export const light_surface2_Tooltip = n123
export const light_surface2_ProgressIndicator = n123
export const light_surface3_SwitchThumb = n123
export const light_surface3_SliderThumb = n123
export const light_surface3_Tooltip = n123
export const light_surface3_ProgressIndicator = n123
const n124 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 4],[7, 5],[8, 6],[9, 7],[10, 8],[11, 134],[12, 133],[13, 1],[14, 132],[15, 131],[16, 130],[17, 129],[18, 0],[19, 128],[20, 127],[21, 126],[22, 122],[23, 123],[24, 124],[25, 125],[26, 8],[27, 134],[28, 7],[29, 7],[30, 1],[31, 132],[32, 133],[33, 1],[34, 126],[35, 127],[36, 126],[37, 127],[38, 122],[39, 0],[40, 123]])

export const dark_SwitchThumb = n124
export const dark_SliderThumb = n124
export const dark_Tooltip = n124
export const dark_ProgressIndicator = n124
export const dark_alt1_SwitchThumb = n124
export const dark_alt1_SliderThumb = n124
export const dark_alt1_Tooltip = n124
export const dark_alt1_ProgressIndicator = n124
export const dark_alt2_SwitchThumb = n124
export const dark_alt2_SliderThumb = n124
export const dark_alt2_Tooltip = n124
export const dark_alt2_ProgressIndicator = n124
export const dark_surface1_SwitchThumb = n124
export const dark_surface1_SliderThumb = n124
export const dark_surface1_Tooltip = n124
export const dark_surface1_ProgressIndicator = n124
export const dark_surface2_SwitchThumb = n124
export const dark_surface2_SliderThumb = n124
export const dark_surface2_Tooltip = n124
export const dark_surface2_ProgressIndicator = n124
export const dark_surface3_SwitchThumb = n124
export const dark_surface3_SliderThumb = n124
export const dark_surface3_Tooltip = n124
export const dark_surface3_ProgressIndicator = n124
const n125 = t([[26, 127],[27, 126],[28, 128],[29, 128],[30, 129],[31, 0],[33, 129],[32, 130]])

export const light_accent_ListItem = n125
export const light_accent_SelectTrigger = n125
export const light_accent_Card = n125
export const light_accent_Progress = n125
export const light_accent_TooltipArrow = n125
export const light_accent_SliderTrack = n125
export const light_accent_Input = n125
export const light_accent_TextArea = n125
const n126 = t([[26, 0],[27, 128],[28, 129],[29, 129],[30, 131],[31, 130],[33, 131],[32, 132]])

export const light_accent_Button = n126
export const light_accent_SliderTrackActive = n126
const n127 = t([[26, 128],[27, 127],[28, 0],[29, 0],[30, 130],[31, 129],[33, 130],[32, 131]])

export const light_accent_Checkbox = n127
export const light_accent_Switch = n127
export const light_accent_TooltipContent = n127
export const light_accent_RadioGroupItem = n127
const n128 = t([[0, 16],[1, 11],[2, 557],[3, 557],[4, 557],[5, 557],[6, 4],[7, 5],[8, 6],[9, 7],[10, 8],[11, 134],[12, 133],[13, 1],[14, 132],[15, 131],[16, 130],[17, 129],[18, 0],[19, 128],[20, 127],[21, 126],[22, 122],[23, 123],[24, 124],[25, 125],[26, 8],[27, 7],[28, 134],[29, 134],[30, 1],[31, 133],[32, 132],[33, 1],[34, 126],[35, 127],[36, 126],[37, 127],[38, 122],[39, 0],[40, 123]])

export const light_accent_SwitchThumb = n128
export const light_accent_SliderThumb = n128
export const light_accent_Tooltip = n128
export const light_accent_ProgressIndicator = n128
const n129 = t([[26, 9],[27, 10],[28, 8],[29, 8],[30, 12],[31, 13],[33, 12],[32, 11]])

export const dark_accent_ListItem = n129
export const dark_accent_SelectTrigger = n129
export const dark_accent_Card = n129
export const dark_accent_Progress = n129
export const dark_accent_TooltipArrow = n129
export const dark_accent_SliderTrack = n129
export const dark_accent_Input = n129
export const dark_accent_TextArea = n129
const n130 = t([[26, 11],[27, 12],[28, 10],[29, 10],[30, 14],[31, 15],[33, 14],[32, 13]])

export const dark_accent_Button = n130
export const dark_accent_SliderTrackActive = n130
const n131 = t([[26, 10],[27, 11],[28, 9],[29, 9],[30, 13],[31, 14],[33, 13],[32, 12]])

export const dark_accent_Checkbox = n131
export const dark_accent_Switch = n131
export const dark_accent_TooltipContent = n131
export const dark_accent_RadioGroupItem = n131
const n132 = t([[0, 0],[1, 1],[2, 557],[3, 557],[4, 557],[5, 557],[6, 20],[7, 21],[8, 22],[9, 23],[10, 19],[11, 18],[12, 17],[13, 16],[14, 15],[15, 14],[16, 13],[17, 12],[18, 11],[19, 10],[20, 9],[21, 8],[22, 4],[23, 5],[24, 6],[25, 7],[26, 19],[27, 18],[28, 23],[29, 23],[30, 16],[31, 15],[32, 17],[33, 16],[34, 8],[35, 9],[36, 8],[37, 9],[38, 4],[39, 11],[40, 5]])

export const dark_accent_SwitchThumb = n132
export const dark_accent_SliderThumb = n132
export const dark_accent_Tooltip = n132
export const dark_accent_ProgressIndicator = n132
const n133 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 20],[7, 21],[8, 22],[9, 23],[10, 19],[11, 234],[12, 233],[13, 16],[14, 232],[15, 231],[16, 14],[17, 230],[18, 229],[19, 228],[20, 9],[21, 227],[22, 223],[23, 224],[24, 225],[25, 226],[26, 19],[27, 23],[28, 234],[29, 234],[30, 16],[31, 233],[32, 232],[33, 16],[34, 227],[35, 9],[36, 227],[37, 9],[38, 223],[39, 229],[40, 224]])

export const light_gray_SwitchThumb = n133
export const light_gray_SliderThumb = n133
export const light_gray_Tooltip = n133
export const light_gray_ProgressIndicator = n133
export const light_gray_alt1_SwitchThumb = n133
export const light_gray_alt1_SliderThumb = n133
export const light_gray_alt1_Tooltip = n133
export const light_gray_alt1_ProgressIndicator = n133
export const light_gray_alt2_SwitchThumb = n133
export const light_gray_alt2_SliderThumb = n133
export const light_gray_alt2_Tooltip = n133
export const light_gray_alt2_ProgressIndicator = n133
export const light_gray_surface1_SwitchThumb = n133
export const light_gray_surface1_SliderThumb = n133
export const light_gray_surface1_Tooltip = n133
export const light_gray_surface1_ProgressIndicator = n133
export const light_gray_surface2_SwitchThumb = n133
export const light_gray_surface2_SliderThumb = n133
export const light_gray_surface2_Tooltip = n133
export const light_gray_surface2_ProgressIndicator = n133
export const light_gray_surface3_SwitchThumb = n133
export const light_gray_surface3_SliderThumb = n133
export const light_gray_surface3_Tooltip = n133
export const light_gray_surface3_ProgressIndicator = n133
const n134 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 251],[7, 252],[8, 253],[9, 254],[10, 250],[11, 249],[12, 248],[13, 247],[14, 246],[15, 245],[16, 244],[17, 243],[18, 242],[19, 241],[20, 240],[21, 239],[22, 235],[23, 236],[24, 237],[25, 238],[26, 250],[27, 254],[28, 249],[29, 249],[30, 247],[31, 248],[32, 246],[33, 247],[34, 239],[35, 240],[36, 239],[37, 240],[38, 235],[39, 242],[40, 236]])

export const light_blue_SwitchThumb = n134
export const light_blue_SliderThumb = n134
export const light_blue_Tooltip = n134
export const light_blue_ProgressIndicator = n134
export const light_blue_alt1_SwitchThumb = n134
export const light_blue_alt1_SliderThumb = n134
export const light_blue_alt1_Tooltip = n134
export const light_blue_alt1_ProgressIndicator = n134
export const light_blue_alt2_SwitchThumb = n134
export const light_blue_alt2_SliderThumb = n134
export const light_blue_alt2_Tooltip = n134
export const light_blue_alt2_ProgressIndicator = n134
export const light_blue_surface1_SwitchThumb = n134
export const light_blue_surface1_SliderThumb = n134
export const light_blue_surface1_Tooltip = n134
export const light_blue_surface1_ProgressIndicator = n134
export const light_blue_surface2_SwitchThumb = n134
export const light_blue_surface2_SliderThumb = n134
export const light_blue_surface2_Tooltip = n134
export const light_blue_surface2_ProgressIndicator = n134
export const light_blue_surface3_SwitchThumb = n134
export const light_blue_surface3_SliderThumb = n134
export const light_blue_surface3_Tooltip = n134
export const light_blue_surface3_ProgressIndicator = n134
const n135 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 271],[7, 272],[8, 273],[9, 274],[10, 270],[11, 269],[12, 268],[13, 267],[14, 266],[15, 265],[16, 264],[17, 263],[18, 262],[19, 261],[20, 260],[21, 259],[22, 255],[23, 256],[24, 257],[25, 258],[26, 270],[27, 274],[28, 269],[29, 269],[30, 267],[31, 268],[32, 266],[33, 267],[34, 259],[35, 260],[36, 259],[37, 260],[38, 255],[39, 262],[40, 256]])

export const light_orange_SwitchThumb = n135
export const light_orange_SliderThumb = n135
export const light_orange_Tooltip = n135
export const light_orange_ProgressIndicator = n135
export const light_orange_alt1_SwitchThumb = n135
export const light_orange_alt1_SliderThumb = n135
export const light_orange_alt1_Tooltip = n135
export const light_orange_alt1_ProgressIndicator = n135
export const light_orange_alt2_SwitchThumb = n135
export const light_orange_alt2_SliderThumb = n135
export const light_orange_alt2_Tooltip = n135
export const light_orange_alt2_ProgressIndicator = n135
export const light_orange_surface1_SwitchThumb = n135
export const light_orange_surface1_SliderThumb = n135
export const light_orange_surface1_Tooltip = n135
export const light_orange_surface1_ProgressIndicator = n135
export const light_orange_surface2_SwitchThumb = n135
export const light_orange_surface2_SliderThumb = n135
export const light_orange_surface2_Tooltip = n135
export const light_orange_surface2_ProgressIndicator = n135
export const light_orange_surface3_SwitchThumb = n135
export const light_orange_surface3_SliderThumb = n135
export const light_orange_surface3_Tooltip = n135
export const light_orange_surface3_ProgressIndicator = n135
const n136 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 290],[7, 291],[8, 292],[9, 293],[10, 289],[11, 288],[12, 287],[13, 286],[14, 285],[15, 284],[16, 283],[17, 282],[18, 281],[19, 280],[20, 279],[21, 279],[22, 275],[23, 276],[24, 277],[25, 278],[26, 289],[27, 293],[28, 288],[29, 288],[30, 286],[31, 287],[32, 285],[33, 286],[34, 279],[35, 279],[36, 279],[37, 279],[38, 275],[39, 281],[40, 276]])

export const light_red_SwitchThumb = n136
export const light_red_SliderThumb = n136
export const light_red_Tooltip = n136
export const light_red_ProgressIndicator = n136
export const light_red_alt1_SwitchThumb = n136
export const light_red_alt1_SliderThumb = n136
export const light_red_alt1_Tooltip = n136
export const light_red_alt1_ProgressIndicator = n136
export const light_red_alt2_SwitchThumb = n136
export const light_red_alt2_SliderThumb = n136
export const light_red_alt2_Tooltip = n136
export const light_red_alt2_ProgressIndicator = n136
export const light_red_surface1_SwitchThumb = n136
export const light_red_surface1_SliderThumb = n136
export const light_red_surface1_Tooltip = n136
export const light_red_surface1_ProgressIndicator = n136
export const light_red_surface2_SwitchThumb = n136
export const light_red_surface2_SliderThumb = n136
export const light_red_surface2_Tooltip = n136
export const light_red_surface2_ProgressIndicator = n136
export const light_red_surface3_SwitchThumb = n136
export const light_red_surface3_SliderThumb = n136
export const light_red_surface3_Tooltip = n136
export const light_red_surface3_ProgressIndicator = n136
const n137 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 310],[7, 311],[8, 312],[9, 313],[10, 309],[11, 308],[12, 307],[13, 306],[14, 305],[15, 304],[16, 303],[17, 302],[18, 301],[19, 300],[20, 299],[21, 298],[22, 294],[23, 295],[24, 296],[25, 297],[26, 309],[27, 313],[28, 308],[29, 308],[30, 306],[31, 307],[32, 305],[33, 306],[34, 298],[35, 299],[36, 298],[37, 299],[38, 294],[39, 301],[40, 295]])

export const light_yellow_SwitchThumb = n137
export const light_yellow_SliderThumb = n137
export const light_yellow_Tooltip = n137
export const light_yellow_ProgressIndicator = n137
export const light_yellow_alt1_SwitchThumb = n137
export const light_yellow_alt1_SliderThumb = n137
export const light_yellow_alt1_Tooltip = n137
export const light_yellow_alt1_ProgressIndicator = n137
export const light_yellow_alt2_SwitchThumb = n137
export const light_yellow_alt2_SliderThumb = n137
export const light_yellow_alt2_Tooltip = n137
export const light_yellow_alt2_ProgressIndicator = n137
export const light_yellow_surface1_SwitchThumb = n137
export const light_yellow_surface1_SliderThumb = n137
export const light_yellow_surface1_Tooltip = n137
export const light_yellow_surface1_ProgressIndicator = n137
export const light_yellow_surface2_SwitchThumb = n137
export const light_yellow_surface2_SliderThumb = n137
export const light_yellow_surface2_Tooltip = n137
export const light_yellow_surface2_ProgressIndicator = n137
export const light_yellow_surface3_SwitchThumb = n137
export const light_yellow_surface3_SliderThumb = n137
export const light_yellow_surface3_Tooltip = n137
export const light_yellow_surface3_ProgressIndicator = n137
const n138 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 330],[7, 331],[8, 332],[9, 333],[10, 329],[11, 328],[12, 327],[13, 326],[14, 325],[15, 324],[16, 323],[17, 322],[18, 321],[19, 320],[20, 319],[21, 318],[22, 314],[23, 315],[24, 316],[25, 317],[26, 329],[27, 333],[28, 328],[29, 328],[30, 326],[31, 327],[32, 325],[33, 326],[34, 318],[35, 319],[36, 318],[37, 319],[38, 314],[39, 321],[40, 315]])

export const light_green_SwitchThumb = n138
export const light_green_SliderThumb = n138
export const light_green_Tooltip = n138
export const light_green_ProgressIndicator = n138
export const light_green_alt1_SwitchThumb = n138
export const light_green_alt1_SliderThumb = n138
export const light_green_alt1_Tooltip = n138
export const light_green_alt1_ProgressIndicator = n138
export const light_green_alt2_SwitchThumb = n138
export const light_green_alt2_SliderThumb = n138
export const light_green_alt2_Tooltip = n138
export const light_green_alt2_ProgressIndicator = n138
export const light_green_surface1_SwitchThumb = n138
export const light_green_surface1_SliderThumb = n138
export const light_green_surface1_Tooltip = n138
export const light_green_surface1_ProgressIndicator = n138
export const light_green_surface2_SwitchThumb = n138
export const light_green_surface2_SliderThumb = n138
export const light_green_surface2_Tooltip = n138
export const light_green_surface2_ProgressIndicator = n138
export const light_green_surface3_SwitchThumb = n138
export const light_green_surface3_SliderThumb = n138
export const light_green_surface3_Tooltip = n138
export const light_green_surface3_ProgressIndicator = n138
const n139 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 350],[7, 351],[8, 352],[9, 353],[10, 349],[11, 348],[12, 347],[13, 346],[14, 345],[15, 344],[16, 343],[17, 342],[18, 341],[19, 340],[20, 339],[21, 338],[22, 334],[23, 335],[24, 336],[25, 337],[26, 349],[27, 353],[28, 348],[29, 348],[30, 346],[31, 347],[32, 345],[33, 346],[34, 338],[35, 339],[36, 338],[37, 339],[38, 334],[39, 341],[40, 335]])

export const light_purple_SwitchThumb = n139
export const light_purple_SliderThumb = n139
export const light_purple_Tooltip = n139
export const light_purple_ProgressIndicator = n139
export const light_purple_alt1_SwitchThumb = n139
export const light_purple_alt1_SliderThumb = n139
export const light_purple_alt1_Tooltip = n139
export const light_purple_alt1_ProgressIndicator = n139
export const light_purple_alt2_SwitchThumb = n139
export const light_purple_alt2_SliderThumb = n139
export const light_purple_alt2_Tooltip = n139
export const light_purple_alt2_ProgressIndicator = n139
export const light_purple_surface1_SwitchThumb = n139
export const light_purple_surface1_SliderThumb = n139
export const light_purple_surface1_Tooltip = n139
export const light_purple_surface1_ProgressIndicator = n139
export const light_purple_surface2_SwitchThumb = n139
export const light_purple_surface2_SliderThumb = n139
export const light_purple_surface2_Tooltip = n139
export const light_purple_surface2_ProgressIndicator = n139
export const light_purple_surface3_SwitchThumb = n139
export const light_purple_surface3_SliderThumb = n139
export const light_purple_surface3_Tooltip = n139
export const light_purple_surface3_ProgressIndicator = n139
const n140 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 370],[7, 371],[8, 372],[9, 373],[10, 369],[11, 368],[12, 367],[13, 366],[14, 365],[15, 364],[16, 363],[17, 362],[18, 361],[19, 360],[20, 359],[21, 358],[22, 354],[23, 355],[24, 356],[25, 357],[26, 369],[27, 373],[28, 368],[29, 368],[30, 366],[31, 367],[32, 365],[33, 366],[34, 358],[35, 359],[36, 358],[37, 359],[38, 354],[39, 361],[40, 355]])

export const light_pink_SwitchThumb = n140
export const light_pink_SliderThumb = n140
export const light_pink_Tooltip = n140
export const light_pink_ProgressIndicator = n140
export const light_pink_alt1_SwitchThumb = n140
export const light_pink_alt1_SliderThumb = n140
export const light_pink_alt1_Tooltip = n140
export const light_pink_alt1_ProgressIndicator = n140
export const light_pink_alt2_SwitchThumb = n140
export const light_pink_alt2_SliderThumb = n140
export const light_pink_alt2_Tooltip = n140
export const light_pink_alt2_ProgressIndicator = n140
export const light_pink_surface1_SwitchThumb = n140
export const light_pink_surface1_SliderThumb = n140
export const light_pink_surface1_Tooltip = n140
export const light_pink_surface1_ProgressIndicator = n140
export const light_pink_surface2_SwitchThumb = n140
export const light_pink_surface2_SliderThumb = n140
export const light_pink_surface2_Tooltip = n140
export const light_pink_surface2_ProgressIndicator = n140
export const light_pink_surface3_SwitchThumb = n140
export const light_pink_surface3_SliderThumb = n140
export const light_pink_surface3_Tooltip = n140
export const light_pink_surface3_ProgressIndicator = n140
const n141 = t([[0, 1],[1, 0],[2, 557],[3, 557],[4, 557],[5, 557],[6, 390],[7, 391],[8, 392],[9, 393],[10, 389],[11, 388],[12, 387],[13, 386],[14, 385],[15, 384],[16, 383],[17, 382],[18, 381],[19, 380],[20, 379],[21, 378],[22, 374],[23, 375],[24, 376],[25, 377],[26, 389],[27, 393],[28, 388],[29, 388],[30, 386],[31, 387],[32, 385],[33, 386],[34, 378],[35, 379],[36, 378],[37, 379],[38, 374],[39, 381],[40, 375]])

export const light_tan_SwitchThumb = n141
export const light_tan_SliderThumb = n141
export const light_tan_Tooltip = n141
export const light_tan_ProgressIndicator = n141
export const light_tan_alt1_SwitchThumb = n141
export const light_tan_alt1_SliderThumb = n141
export const light_tan_alt1_Tooltip = n141
export const light_tan_alt1_ProgressIndicator = n141
export const light_tan_alt2_SwitchThumb = n141
export const light_tan_alt2_SliderThumb = n141
export const light_tan_alt2_Tooltip = n141
export const light_tan_alt2_ProgressIndicator = n141
export const light_tan_surface1_SwitchThumb = n141
export const light_tan_surface1_SliderThumb = n141
export const light_tan_surface1_Tooltip = n141
export const light_tan_surface1_ProgressIndicator = n141
export const light_tan_surface2_SwitchThumb = n141
export const light_tan_surface2_SliderThumb = n141
export const light_tan_surface2_Tooltip = n141
export const light_tan_surface2_ProgressIndicator = n141
export const light_tan_surface3_SwitchThumb = n141
export const light_tan_surface3_SliderThumb = n141
export const light_tan_surface3_Tooltip = n141
export const light_tan_surface3_ProgressIndicator = n141
const n142 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 400],[7, 401],[8, 402],[9, 403],[10, 229],[11, 399],[12, 398],[13, 234],[14, 397],[15, 396],[16, 130],[17, 395],[18, 129],[19, 0],[20, 394],[21, 19],[22, 20],[23, 21],[24, 22],[25, 23],[26, 229],[27, 399],[28, 403],[29, 403],[30, 234],[31, 397],[32, 398],[33, 234],[34, 19],[35, 394],[36, 19],[37, 394],[38, 20],[39, 129],[40, 21]])

export const dark_gray_SwitchThumb = n142
export const dark_gray_SliderThumb = n142
export const dark_gray_Tooltip = n142
export const dark_gray_ProgressIndicator = n142
export const dark_gray_alt1_SwitchThumb = n142
export const dark_gray_alt1_SliderThumb = n142
export const dark_gray_alt1_Tooltip = n142
export const dark_gray_alt1_ProgressIndicator = n142
export const dark_gray_alt2_SwitchThumb = n142
export const dark_gray_alt2_SliderThumb = n142
export const dark_gray_alt2_Tooltip = n142
export const dark_gray_alt2_ProgressIndicator = n142
export const dark_gray_surface1_SwitchThumb = n142
export const dark_gray_surface1_SliderThumb = n142
export const dark_gray_surface1_Tooltip = n142
export const dark_gray_surface1_ProgressIndicator = n142
export const dark_gray_surface2_SwitchThumb = n142
export const dark_gray_surface2_SliderThumb = n142
export const dark_gray_surface2_Tooltip = n142
export const dark_gray_surface2_ProgressIndicator = n142
export const dark_gray_surface3_SwitchThumb = n142
export const dark_gray_surface3_SliderThumb = n142
export const dark_gray_surface3_Tooltip = n142
export const dark_gray_surface3_ProgressIndicator = n142
const n143 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 419],[7, 420],[8, 421],[9, 422],[10, 418],[11, 417],[12, 416],[13, 247],[14, 415],[15, 414],[16, 413],[17, 412],[18, 411],[19, 410],[20, 409],[21, 408],[22, 404],[23, 405],[24, 406],[25, 407],[26, 418],[27, 417],[28, 422],[29, 422],[30, 247],[31, 415],[32, 416],[33, 247],[34, 408],[35, 409],[36, 408],[37, 409],[38, 404],[39, 411],[40, 405]])

export const dark_blue_SwitchThumb = n143
export const dark_blue_SliderThumb = n143
export const dark_blue_Tooltip = n143
export const dark_blue_ProgressIndicator = n143
export const dark_blue_alt1_SwitchThumb = n143
export const dark_blue_alt1_SliderThumb = n143
export const dark_blue_alt1_Tooltip = n143
export const dark_blue_alt1_ProgressIndicator = n143
export const dark_blue_alt2_SwitchThumb = n143
export const dark_blue_alt2_SliderThumb = n143
export const dark_blue_alt2_Tooltip = n143
export const dark_blue_alt2_ProgressIndicator = n143
export const dark_blue_surface1_SwitchThumb = n143
export const dark_blue_surface1_SliderThumb = n143
export const dark_blue_surface1_Tooltip = n143
export const dark_blue_surface1_ProgressIndicator = n143
export const dark_blue_surface2_SwitchThumb = n143
export const dark_blue_surface2_SliderThumb = n143
export const dark_blue_surface2_Tooltip = n143
export const dark_blue_surface2_ProgressIndicator = n143
export const dark_blue_surface3_SwitchThumb = n143
export const dark_blue_surface3_SliderThumb = n143
export const dark_blue_surface3_Tooltip = n143
export const dark_blue_surface3_ProgressIndicator = n143
const n144 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 438],[7, 439],[8, 440],[9, 441],[10, 437],[11, 436],[12, 435],[13, 267],[14, 434],[15, 433],[16, 432],[17, 431],[18, 430],[19, 429],[20, 428],[21, 427],[22, 423],[23, 424],[24, 425],[25, 426],[26, 437],[27, 436],[28, 441],[29, 441],[30, 267],[31, 434],[32, 435],[33, 267],[34, 427],[35, 428],[36, 427],[37, 428],[38, 423],[39, 430],[40, 424]])

export const dark_orange_SwitchThumb = n144
export const dark_orange_SliderThumb = n144
export const dark_orange_Tooltip = n144
export const dark_orange_ProgressIndicator = n144
export const dark_orange_alt1_SwitchThumb = n144
export const dark_orange_alt1_SliderThumb = n144
export const dark_orange_alt1_Tooltip = n144
export const dark_orange_alt1_ProgressIndicator = n144
export const dark_orange_alt2_SwitchThumb = n144
export const dark_orange_alt2_SliderThumb = n144
export const dark_orange_alt2_Tooltip = n144
export const dark_orange_alt2_ProgressIndicator = n144
export const dark_orange_surface1_SwitchThumb = n144
export const dark_orange_surface1_SliderThumb = n144
export const dark_orange_surface1_Tooltip = n144
export const dark_orange_surface1_ProgressIndicator = n144
export const dark_orange_surface2_SwitchThumb = n144
export const dark_orange_surface2_SliderThumb = n144
export const dark_orange_surface2_Tooltip = n144
export const dark_orange_surface2_ProgressIndicator = n144
export const dark_orange_surface3_SwitchThumb = n144
export const dark_orange_surface3_SliderThumb = n144
export const dark_orange_surface3_Tooltip = n144
export const dark_orange_surface3_ProgressIndicator = n144
const n145 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 457],[7, 458],[8, 459],[9, 460],[10, 456],[11, 455],[12, 454],[13, 286],[14, 453],[15, 452],[16, 451],[17, 450],[18, 449],[19, 448],[20, 447],[21, 446],[22, 442],[23, 443],[24, 444],[25, 445],[26, 456],[27, 455],[28, 460],[29, 460],[30, 286],[31, 453],[32, 454],[33, 286],[34, 446],[35, 447],[36, 446],[37, 447],[38, 442],[39, 449],[40, 443]])

export const dark_red_SwitchThumb = n145
export const dark_red_SliderThumb = n145
export const dark_red_Tooltip = n145
export const dark_red_ProgressIndicator = n145
export const dark_red_alt1_SwitchThumb = n145
export const dark_red_alt1_SliderThumb = n145
export const dark_red_alt1_Tooltip = n145
export const dark_red_alt1_ProgressIndicator = n145
export const dark_red_alt2_SwitchThumb = n145
export const dark_red_alt2_SliderThumb = n145
export const dark_red_alt2_Tooltip = n145
export const dark_red_alt2_ProgressIndicator = n145
export const dark_red_surface1_SwitchThumb = n145
export const dark_red_surface1_SliderThumb = n145
export const dark_red_surface1_Tooltip = n145
export const dark_red_surface1_ProgressIndicator = n145
export const dark_red_surface2_SwitchThumb = n145
export const dark_red_surface2_SliderThumb = n145
export const dark_red_surface2_Tooltip = n145
export const dark_red_surface2_ProgressIndicator = n145
export const dark_red_surface3_SwitchThumb = n145
export const dark_red_surface3_SliderThumb = n145
export const dark_red_surface3_Tooltip = n145
export const dark_red_surface3_ProgressIndicator = n145
const n146 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 476],[7, 477],[8, 478],[9, 479],[10, 475],[11, 474],[12, 473],[13, 306],[14, 472],[15, 471],[16, 470],[17, 469],[18, 468],[19, 467],[20, 466],[21, 465],[22, 461],[23, 462],[24, 463],[25, 464],[26, 475],[27, 474],[28, 479],[29, 479],[30, 306],[31, 472],[32, 473],[33, 306],[34, 465],[35, 466],[36, 465],[37, 466],[38, 461],[39, 468],[40, 462]])

export const dark_yellow_SwitchThumb = n146
export const dark_yellow_SliderThumb = n146
export const dark_yellow_Tooltip = n146
export const dark_yellow_ProgressIndicator = n146
export const dark_yellow_alt1_SwitchThumb = n146
export const dark_yellow_alt1_SliderThumb = n146
export const dark_yellow_alt1_Tooltip = n146
export const dark_yellow_alt1_ProgressIndicator = n146
export const dark_yellow_alt2_SwitchThumb = n146
export const dark_yellow_alt2_SliderThumb = n146
export const dark_yellow_alt2_Tooltip = n146
export const dark_yellow_alt2_ProgressIndicator = n146
export const dark_yellow_surface1_SwitchThumb = n146
export const dark_yellow_surface1_SliderThumb = n146
export const dark_yellow_surface1_Tooltip = n146
export const dark_yellow_surface1_ProgressIndicator = n146
export const dark_yellow_surface2_SwitchThumb = n146
export const dark_yellow_surface2_SliderThumb = n146
export const dark_yellow_surface2_Tooltip = n146
export const dark_yellow_surface2_ProgressIndicator = n146
export const dark_yellow_surface3_SwitchThumb = n146
export const dark_yellow_surface3_SliderThumb = n146
export const dark_yellow_surface3_Tooltip = n146
export const dark_yellow_surface3_ProgressIndicator = n146
const n147 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 495],[7, 496],[8, 497],[9, 498],[10, 494],[11, 493],[12, 492],[13, 326],[14, 491],[15, 490],[16, 489],[17, 488],[18, 487],[19, 486],[20, 485],[21, 484],[22, 480],[23, 481],[24, 482],[25, 483],[26, 494],[27, 493],[28, 498],[29, 498],[30, 326],[31, 491],[32, 492],[33, 326],[34, 484],[35, 485],[36, 484],[37, 485],[38, 480],[39, 487],[40, 481]])

export const dark_green_SwitchThumb = n147
export const dark_green_SliderThumb = n147
export const dark_green_Tooltip = n147
export const dark_green_ProgressIndicator = n147
export const dark_green_alt1_SwitchThumb = n147
export const dark_green_alt1_SliderThumb = n147
export const dark_green_alt1_Tooltip = n147
export const dark_green_alt1_ProgressIndicator = n147
export const dark_green_alt2_SwitchThumb = n147
export const dark_green_alt2_SliderThumb = n147
export const dark_green_alt2_Tooltip = n147
export const dark_green_alt2_ProgressIndicator = n147
export const dark_green_surface1_SwitchThumb = n147
export const dark_green_surface1_SliderThumb = n147
export const dark_green_surface1_Tooltip = n147
export const dark_green_surface1_ProgressIndicator = n147
export const dark_green_surface2_SwitchThumb = n147
export const dark_green_surface2_SliderThumb = n147
export const dark_green_surface2_Tooltip = n147
export const dark_green_surface2_ProgressIndicator = n147
export const dark_green_surface3_SwitchThumb = n147
export const dark_green_surface3_SliderThumb = n147
export const dark_green_surface3_Tooltip = n147
export const dark_green_surface3_ProgressIndicator = n147
const n148 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 514],[7, 515],[8, 516],[9, 517],[10, 513],[11, 512],[12, 511],[13, 346],[14, 510],[15, 509],[16, 508],[17, 507],[18, 506],[19, 505],[20, 504],[21, 503],[22, 499],[23, 500],[24, 501],[25, 502],[26, 513],[27, 512],[28, 517],[29, 517],[30, 346],[31, 510],[32, 511],[33, 346],[34, 503],[35, 504],[36, 503],[37, 504],[38, 499],[39, 506],[40, 500]])

export const dark_purple_SwitchThumb = n148
export const dark_purple_SliderThumb = n148
export const dark_purple_Tooltip = n148
export const dark_purple_ProgressIndicator = n148
export const dark_purple_alt1_SwitchThumb = n148
export const dark_purple_alt1_SliderThumb = n148
export const dark_purple_alt1_Tooltip = n148
export const dark_purple_alt1_ProgressIndicator = n148
export const dark_purple_alt2_SwitchThumb = n148
export const dark_purple_alt2_SliderThumb = n148
export const dark_purple_alt2_Tooltip = n148
export const dark_purple_alt2_ProgressIndicator = n148
export const dark_purple_surface1_SwitchThumb = n148
export const dark_purple_surface1_SliderThumb = n148
export const dark_purple_surface1_Tooltip = n148
export const dark_purple_surface1_ProgressIndicator = n148
export const dark_purple_surface2_SwitchThumb = n148
export const dark_purple_surface2_SliderThumb = n148
export const dark_purple_surface2_Tooltip = n148
export const dark_purple_surface2_ProgressIndicator = n148
export const dark_purple_surface3_SwitchThumb = n148
export const dark_purple_surface3_SliderThumb = n148
export const dark_purple_surface3_Tooltip = n148
export const dark_purple_surface3_ProgressIndicator = n148
const n149 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 533],[7, 534],[8, 535],[9, 536],[10, 532],[11, 531],[12, 530],[13, 366],[14, 529],[15, 528],[16, 527],[17, 526],[18, 525],[19, 524],[20, 523],[21, 522],[22, 518],[23, 519],[24, 520],[25, 521],[26, 532],[27, 531],[28, 536],[29, 536],[30, 366],[31, 529],[32, 530],[33, 366],[34, 522],[35, 523],[36, 522],[37, 523],[38, 518],[39, 525],[40, 519]])

export const dark_pink_SwitchThumb = n149
export const dark_pink_SliderThumb = n149
export const dark_pink_Tooltip = n149
export const dark_pink_ProgressIndicator = n149
export const dark_pink_alt1_SwitchThumb = n149
export const dark_pink_alt1_SliderThumb = n149
export const dark_pink_alt1_Tooltip = n149
export const dark_pink_alt1_ProgressIndicator = n149
export const dark_pink_alt2_SwitchThumb = n149
export const dark_pink_alt2_SliderThumb = n149
export const dark_pink_alt2_Tooltip = n149
export const dark_pink_alt2_ProgressIndicator = n149
export const dark_pink_surface1_SwitchThumb = n149
export const dark_pink_surface1_SliderThumb = n149
export const dark_pink_surface1_Tooltip = n149
export const dark_pink_surface1_ProgressIndicator = n149
export const dark_pink_surface2_SwitchThumb = n149
export const dark_pink_surface2_SliderThumb = n149
export const dark_pink_surface2_Tooltip = n149
export const dark_pink_surface2_ProgressIndicator = n149
export const dark_pink_surface3_SwitchThumb = n149
export const dark_pink_surface3_SliderThumb = n149
export const dark_pink_surface3_Tooltip = n149
export const dark_pink_surface3_ProgressIndicator = n149
const n150 = t([[0, 11],[1, 16],[2, 557],[3, 557],[4, 557],[5, 557],[6, 553],[7, 554],[8, 555],[9, 556],[10, 552],[11, 551],[12, 550],[13, 549],[14, 548],[15, 547],[16, 546],[17, 545],[18, 544],[19, 543],[20, 542],[21, 541],[22, 537],[23, 538],[24, 539],[25, 540],[26, 552],[27, 551],[28, 556],[29, 556],[30, 549],[31, 548],[32, 550],[33, 549],[34, 541],[35, 542],[36, 541],[37, 542],[38, 537],[39, 544],[40, 538]])

export const dark_tan_SwitchThumb = n150
export const dark_tan_SliderThumb = n150
export const dark_tan_Tooltip = n150
export const dark_tan_ProgressIndicator = n150
export const dark_tan_alt1_SwitchThumb = n150
export const dark_tan_alt1_SliderThumb = n150
export const dark_tan_alt1_Tooltip = n150
export const dark_tan_alt1_ProgressIndicator = n150
export const dark_tan_alt2_SwitchThumb = n150
export const dark_tan_alt2_SliderThumb = n150
export const dark_tan_alt2_Tooltip = n150
export const dark_tan_alt2_ProgressIndicator = n150
export const dark_tan_surface1_SwitchThumb = n150
export const dark_tan_surface1_SliderThumb = n150
export const dark_tan_surface1_Tooltip = n150
export const dark_tan_surface1_ProgressIndicator = n150
export const dark_tan_surface2_SwitchThumb = n150
export const dark_tan_surface2_SliderThumb = n150
export const dark_tan_surface2_Tooltip = n150
export const dark_tan_surface2_ProgressIndicator = n150
export const dark_tan_surface3_SwitchThumb = n150
export const dark_tan_surface3_SliderThumb = n150
export const dark_tan_surface3_Tooltip = n150
export const dark_tan_surface3_ProgressIndicator = n150