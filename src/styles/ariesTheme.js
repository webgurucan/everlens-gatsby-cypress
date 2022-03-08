// 2019 branding colors
// source: http://chir.ag/projects/name-that-color

const breakpoints = {
  forPhoneOnly: 599,
  forTabletVerticalUp: 600,
  forTabletVerticalDown: 899,
  forTabletHorizontalUp: 900,
  forTabletHorizontalDown: 1199,
  forDesktopUp: 1200,
  forDesktopDown: 1799,
  forBigDesktopUp: 1800,
};

const fallbackFont = 'Helvetica, Arial, sans-serif';

const fonts = {
  fontFamily: 'AvenirNext-Regular, Helvetica, Arial, sans-serif',
  fontFamilyMd: 'AvenirNext-Medium, Helvetica, Arial, sans-serif',
  fontFamilyDemiBold: 'AvenirNext-DemiBold, Helvetica, Arial, sans-serif',
  fontFamilyBold: 'AvenirNext-Bold, Helvetica, Arial, sans-serif',
};

const mediaQueries = {
  forPhoneOnly: `@media screen and (max-width: ${breakpoints.forPhoneOnly}px)`,
  forTabletVerticalUp: `@media screen and (min-width: ${breakpoints.forTabletVerticalUp}px)`,
  forTabletVerticalDown: `@media screen and (max-width: ${breakpoints.forTabletVerticalDown}px)`,
  forTabletHorizontalUp: `@media screen and (min-width: ${breakpoints.forTabletHorizontalUp}px)`,
  forTabletHorizontalDown: `@media screen and (max-width: ${breakpoints.forTabletHorizontalDown}px)`,
  forDesktopUp: `@media screen and (min-width: ${breakpoints.forDesktopUp}px)`,
  forDesktopDown: `@media screen and (max-width: ${breakpoints.forDesktopDown}px)`,
  forBigDesktopUp: `@media screen and (min-width: ${breakpoints.forBigDesktopUp}px)`,
};

// 2019 branding fonts (aries)
const ariesFonts = {
  lightFont: `Nexa-Light, Nexa W01 Light, ${fallbackFont}`,
  lightItalicFont: `Nexa-Light-Italic, ${fallbackFont}`,
  regularFont: `Nexa-Regular, Nexa W01 Regular, ${fallbackFont}`,
  regularItalicFont: `Nexa-Regular-Italic, ${fallbackFont}`,
  boldFont: `Nexa-Bold, Nexa W01 Bold, ${fallbackFont}`,
  boldItalicFont: `Nexa-Bold-Italic, ${fallbackFont}`,
  xBoldFont: `Nexa-XBold, ${fallbackFont}`,
  xBoldItalicFont: `Nexa-XBold-Italic, ${fallbackFont}`,
  heavyFont: `Nexa-Heavy, Nexa W01 Heavy, ${fallbackFont}`,
  heavyItalicFont: `Nexa-Heavy-Italic, ${fallbackFont}`,
};

const ariesColors = {
  mineShaft: '34, 34, 34', // #222222 dark gray
  tundora: '72, 72, 72', // #484848 mid gray
  boulder: '118, 118, 118', // #767676 gray
  gray: '136, 136, 136', // #888888 gray
  manatee: '145, 145, 147', // #919193 light gray
  silverChalice: '162, 162, 162', // #a2a2a2 gray button disabled
  altoDark: '216, 216, 216', // #d8d8d8 input gray border
  altoLight: '221, 221, 221', // #dddddd light gray border
  wildSand: '245, 245, 245', // #f5f5f5 light gray background
  silver: '187, 187, 187', // #bbbbbb very light pink
  alabaster: '251, 251, 251', // #fbfbfb white-two
  oceanGreen: '75, 163, 115', // #4ba373 green 1
  pineGreen: '0, 115, 119', // #007377 green 2
  deepTeal: '0, 49, 51', // #003133 dark green 1
  william: '64, 101, 102', // #406566 dark green 2
  teal: '0, 139, 132', // #008b84 green 2bd focused button, hover
  swamp: '0, 32, 33', // #002021
  gallery: '239, 239, 239', // #efefef
  porcelain: '235, 241, 240', // #EBF1F0 lightGreen

  goldenTainoi: '255, 202, 95', // #ffca5f yellow 1
  rajah: '246, 201, 124', // #F6C97C yellow 2

  burntSienna: '239, 119, 91', // #ef775b orange 1
  apricot: '231, 147, 110', // #e7936e orange 2

  sunglo: '229, 101, 117', // #e56575 coral 1
  coral: '233, 127, 114', // #e97f72 coral 2

  curiousBlue: '26, 160, 226', // Curious Blue light blue
  ziggurat: '184, 221, 225', // #B8DDE1 light blue
  lochmara: '0, 131, 204', // #0083cc medium blue
  prussianBlue: '0, 49, 77', // #00314d dark blue
  bahamaBlue: '0, 98, 152', // #006298 cobalt blue text links etc

  mandy: '229, 92, 109', // #e55c6d dark light red
  lavenderBlush: '248, 230, 230', // #fff2f4 light red
  alizarinCrimson: '225, 32, 29', // Alizarin Crimson dark red

  white: '255, 255, 255', // #ffffff white
  romance: '255, 253, 250', // #fffdfa natural white
  black: '0, 0, 0', // #000 black
};

// Just some thoughts of agnostic example vars
const ariesTheme = {
  primaryTextColor: ariesColors.swamp,
  secondaryTextColor: ariesColors.deepTeal,
  tertiaryTextColor: ariesColors.manatee,
  quaternaryTextColor: ariesColors.boulder,
  quinaryTextColor: ariesColors.oceanGreen,
  boxShadowColor: ariesColors.black,
  white: ariesColors.white,
  black: ariesColors.black,

  // General
  primaryColor: ariesColors.white,
  primaryBgColor: ariesColors.oceanGreen,
  primaryHoverBgColor: ariesColors.teal,
  secondaryColor: ariesColors.oceanGreen,
  secondaryBgColor: ariesColors.white,
  tertiaryBgColor: ariesColors.wildSand,
  secondaryBorderColor: ariesColors.oceanGreen,
  secondaryHoverColor: ariesColors.teal,
  secondaryHoverBorderColor: ariesColors.teal,

  // Links
  linkColor: ariesColors.bahamaBlue,
  linkHoverColor: ariesColors.lochmara,
  linkActiveColor: ariesColors.lochmara,
  linkFocusedColor: ariesColors.prussianBlue,
  linkDisabledColor: ariesColors.manatee,

  // Cart
  cartCountBgColor: ariesColors.oceanGreen,
  cartCountColor: ariesColors.white,
  hoverBgColor: ariesColors.teal,
  defaultBorderColor: ariesColors.altoLight,
  cartItemsBgColor: ariesColors.white,
  cartItemPriceColor: ariesColors.swamp,
  cartProductTitleColor: ariesColors.tundora,
  cartDisabledBtnColor: ariesColors.silverChalice,

  // Toggle
  toggleBgColor: ariesColors.manatee,

  // Input
  inputErrorColor: ariesColors.coral,

  // Marker Chart
  markerChartBase: ariesColors.coral,
  markerChartBoundary: ariesColors.silverChalice,
  markerChartBoundaryBadge: ariesColors.tundora,
  markerDetailsCardBgColor: ariesColors.alabaster,

  // Spinner
  spinnerColor: ariesColors.bahamaBlue,

  // DesktopNavItem
  desktopNavTextColor: ariesColors.william,
  desktopNavHoverTextColor: ariesColors.bahamaBlue,
  desktopNavActiveTextColor: ariesColors.bahamaBlue,
  desktopNavFocusTextColor: ariesColors.bahamaBlue,

  // MobileNavItem
  mobileNavTextColor: ariesColors.william,
  mobileNavActiveTextColor: ariesColors.bahamaBlue,
  mobileNavFocusTextColor: ariesColors.prussianBlue,
  mobileNavSubMenuBgColor: ariesColors.wildSand,
  mobileNavSubMenuTextColor: ariesColors.manatee,

  // CountPicker
  countPickerBtnColor: ariesColors.oceanGreen,
  countPickerBorderColor: ariesColors.silver,
  countPickerBgColor: ariesColors.alabaster,

  // Header
  headerBgColor: ariesColors.white,
  navHoverColor: ariesColors.bahamaBlue,

  // Footer
  footerInputBorderColor: ariesColors.manatee,

  // Modal
  modalFooterBgColor: ariesColors.alabaster,

  // Inputs
  primarySuccessColor: ariesColors.oceanGreen,
  secondarySuccessColor: ariesColors.porcelain,
  primaryDangerColor: ariesColors.mandy,
  secondaryDangerColor: ariesColors.lavenderBlush,
  primaryInfoColor: ariesColors.curiousBlue,

  // Buttons
  disabledBgColor: ariesColors.manatee,
  disabledSecondaryBgColor: ariesColors.white,

  colors: ariesColors,
  ...ariesFonts,
  sizes: {
    maxWidth: '1440px',
    maxWidthCentered: '650px',
  },
  disabled: '0.35', // opacity for disabled items
  ...mediaQueries,
};

const resultsTheme = {
  ...ariesTheme,
  textSecondaryColor: ariesColors.tundora,
  spinnerColor: ariesColors.teal,
  badgeRedColor: ariesColors.mandy,
  dashboardBgColor: ariesColors.alabaster,
};

const theme = {
  ...fonts,
  sizes: {
    maxWidth: '1440px',
    maxWidthCentered: '650px',
  },
  disabled: '0.2', // opacity for disabled items
  ...mediaQueries,
};

export { fonts, mediaQueries, theme, ariesTheme, resultsTheme, breakpoints };
export default theme;
