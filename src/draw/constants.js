const DISPLAY = {
  BLOCK: 'block',
  INLINE_BLOCK: 'inline-block',
  INLINE: 'inline', // 用户不能设置inline，text默认为inline
  FLEX: 'flex'
}

const WIDTH = {
  AUTO: 'auto',
  OUTER: '100%'
}

const POSITION = {
  ABSOLUTE: 'absolute',
  FIXED: 'fixed',
  RELATIVE: 'relative',
  STATIC: 'static'
}

const DEFAULT_STYLES = {
  display: DISPLAY.BLOCK,
  fontSize: 14,
  fontWeight: 400,
  fontFamily: "Microsoft Yahei",
  color: '#000',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  height: WIDTH.AUTO,
  borderRadius: 0
}

export default {
  DISPLAY,
  WIDTH,
  POSITION,
  DEFAULT_STYLES
}