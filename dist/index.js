var $c5L0i$react = require("react");
var $c5L0i$styletronengineatomic = require("styletron-engine-atomic");
var $c5L0i$styletronreact = require("styletron-react");
var $c5L0i$baseui = require("baseui");
var $c5L0i$baseuilayoutgrid = require("baseui/layout-grid");
var $c5L0i$baseuiblock = require("baseui/block");
var $c5L0i$baseuilink = require("baseui/link");
var $c5L0i$baseuibreadcrumbs = require("baseui/breadcrumbs");
var $c5L0i$baseuitypography = require("baseui/typography");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "ThemeProvider", () => $17fe3e5fe4bdddad$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Layout", () => $24533dd42caabcc1$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Footer", () => $de04fa4e41dc5a07$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Breadcrumbs", () => $e59dbe563a799c85$export$2e2bcd8739ae039);
$parcel$export(module.exports, "PlainList", () => $fdf40577fc7f0d44$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Link", () => $b501e8130d3e7ed3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Typography", () => $b644e5d856d20127$export$2e2bcd8739ae039);




const $17fe3e5fe4bdddad$var$primitives = {
    primaryFontFamily: `"IBM Plex Serif", serif`
};
const $17fe3e5fe4bdddad$var$overrides = {
    breakpoints: {
        small: 600,
        medium: 900,
        large: 1200
    },
    colors: {
        linkHover: "orange !important"
    }
};
const $17fe3e5fe4bdddad$var$theme = (0, $c5L0i$baseui.createDarkTheme)($17fe3e5fe4bdddad$var$primitives, $17fe3e5fe4bdddad$var$overrides);
const $17fe3e5fe4bdddad$var$engine = new (0, $c5L0i$styletronengineatomic.Client)();
var $17fe3e5fe4bdddad$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$styletronreact.Provider), {
        value: $17fe3e5fe4bdddad$var$engine
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseui.BaseProvider), {
        theme: $17fe3e5fe4bdddad$var$theme
    }, children));




var $24533dd42caabcc1$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuilayoutgrid.Grid), null, /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuilayoutgrid.Cell), {
        span: 12
    }, children));







var $de04fa4e41dc5a07$export$2e2bcd8739ae039 = ()=>{
    const [, theme] = (0, $c5L0i$baseui.useStyletron)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuilayoutgrid.Grid), null, /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuilayoutgrid.Cell), {
        span: 12
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuiblock.Block), {
        paddingTop: theme.sizing.scale800,
        paddingBottom: theme.sizing.scale800,
        display: "flex",
        justifyContent: "flex-end"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuilink.StyledLink), {
        href: "#top",
        animateUnderline: true
    }, "back to top"))));
};







var $e59dbe563a799c85$export$2e2bcd8739ae039 = ({ currentPageLabel: currentPageLabel  })=>{
    const [, theme] = (0, $c5L0i$baseui.useStyletron)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuiblock.Block), {
        paddingTop: theme.sizing.scale500
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuibreadcrumbs.Breadcrumbs), null, /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuilink.StyledLink), {
        href: "/"
    }, "velox.cc"), currentPageLabel && /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement("span", null, currentPageLabel)));
};




var $fdf40577fc7f0d44$export$2e2bcd8739ae039 = ({ children: children , autoColumns: autoColumns  })=>{
    const [css, theme] = (0, $c5L0i$baseui.useStyletron)();
    const styles = css({
        listStyle: "none",
        paddingLeft: 0,
        ...autoColumns && {
            columnCount: 2,
            [theme.mediaQuery.medium]: {
                columnCount: 4
            }
        }
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement("ul", {
        className: styles
    }, children);
};




var $b501e8130d3e7ed3$export$2e2bcd8739ae039 = (props)=>/*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement((0, $c5L0i$baseuilink.StyledLink), props);




const $b644e5d856d20127$var$Typography = ({ variant: variant , children: children , ...rest })=>{
    const map = {
        h1: (0, $c5L0i$baseuitypography.HeadingXXLarge),
        h2: (0, $c5L0i$baseuitypography.HeadingXLarge),
        h3: (0, $c5L0i$baseuitypography.HeadingLarge),
        h4: (0, $c5L0i$baseuitypography.HeadingMedium),
        h5: (0, $c5L0i$baseuitypography.HeadingSmall),
        h6: (0, $c5L0i$baseuitypography.HeadingXSmall),
        body1: (0, $c5L0i$baseuitypography.ParagraphMedium),
        body2: (0, $c5L0i$baseuitypography.ParagraphSmall)
    };
    const Component = map[variant] || map["body1"];
    return /*#__PURE__*/ (0, ($parcel$interopDefault($c5L0i$react))).createElement(Component, rest, children);
};
var $b644e5d856d20127$export$2e2bcd8739ae039 = $b644e5d856d20127$var$Typography;




//# sourceMappingURL=index.js.map
