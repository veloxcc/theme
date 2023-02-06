import $bdjGp$react from "react";
import {Client as $bdjGp$Client} from "styletron-engine-atomic";
import {Provider as $bdjGp$Provider} from "styletron-react";
import {createDarkTheme as $bdjGp$createDarkTheme, BaseProvider as $bdjGp$BaseProvider, useStyletron as $bdjGp$useStyletron} from "baseui";
import {Grid as $bdjGp$Grid, Cell as $bdjGp$Cell} from "baseui/layout-grid";
import {Block as $bdjGp$Block} from "baseui/block";
import {StyledLink as $bdjGp$StyledLink} from "baseui/link";
import {Breadcrumbs as $bdjGp$Breadcrumbs} from "baseui/breadcrumbs";
import {HeadingXXLarge as $bdjGp$HeadingXXLarge, HeadingXLarge as $bdjGp$HeadingXLarge, HeadingLarge as $bdjGp$HeadingLarge, HeadingMedium as $bdjGp$HeadingMedium, HeadingSmall as $bdjGp$HeadingSmall, HeadingXSmall as $bdjGp$HeadingXSmall, ParagraphMedium as $bdjGp$ParagraphMedium, ParagraphSmall as $bdjGp$ParagraphSmall} from "baseui/typography";





const $f1f09cbc1dd39afc$var$primitives = {
    primaryFontFamily: `"IBM Plex Serif", serif`
};
const $f1f09cbc1dd39afc$var$overrides = {
    breakpoints: {
        small: 600,
        medium: 900,
        large: 1200
    },
    colors: {
        linkHover: "orange !important"
    }
};
const $f1f09cbc1dd39afc$var$theme = (0, $bdjGp$createDarkTheme)($f1f09cbc1dd39afc$var$primitives, $f1f09cbc1dd39afc$var$overrides);
const $f1f09cbc1dd39afc$var$engine = new (0, $bdjGp$Client)();
var $f1f09cbc1dd39afc$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$Provider), {
        value: $f1f09cbc1dd39afc$var$engine
    }, /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$BaseProvider), {
        theme: $f1f09cbc1dd39afc$var$theme
    }, children));




var $aa3c9fe7758a8b0a$export$2e2bcd8739ae039 = ({ children: children  })=>/*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$Grid), null, /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$Cell), {
        span: 12
    }, children));







var $f34df96c6a04241d$export$2e2bcd8739ae039 = ()=>{
    const [, theme] = (0, $bdjGp$useStyletron)();
    return /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$Grid), null, /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$Cell), {
        span: 12
    }, /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$Block), {
        paddingTop: theme.sizing.scale800,
        paddingBottom: theme.sizing.scale800,
        display: "flex",
        justifyContent: "flex-end"
    }, /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$StyledLink), {
        href: "#top",
        animateUnderline: true
    }, "back to top"))));
};







var $8f15d3b9510ac3e2$export$2e2bcd8739ae039 = ({ currentPageLabel: currentPageLabel  })=>{
    const [, theme] = (0, $bdjGp$useStyletron)();
    return /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$Block), {
        paddingTop: theme.sizing.scale500
    }, /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$Breadcrumbs), null, /*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$StyledLink), {
        href: "/"
    }, "velox.cc"), currentPageLabel && /*#__PURE__*/ (0, $bdjGp$react).createElement("span", null, currentPageLabel)));
};




var $3a520e87397905ce$export$2e2bcd8739ae039 = ({ children: children , autoColumns: autoColumns  })=>{
    const [css, theme] = (0, $bdjGp$useStyletron)();
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
    return /*#__PURE__*/ (0, $bdjGp$react).createElement("ul", {
        className: styles
    }, children);
};




var $95d60992a991452a$export$2e2bcd8739ae039 = (props)=>/*#__PURE__*/ (0, $bdjGp$react).createElement((0, $bdjGp$StyledLink), props);




const $b8292b6cbf615085$var$Typography = ({ variant: variant , children: children , ...rest })=>{
    const map = {
        h1: (0, $bdjGp$HeadingXXLarge),
        h2: (0, $bdjGp$HeadingXLarge),
        h3: (0, $bdjGp$HeadingLarge),
        h4: (0, $bdjGp$HeadingMedium),
        h5: (0, $bdjGp$HeadingSmall),
        h6: (0, $bdjGp$HeadingXSmall),
        body1: (0, $bdjGp$ParagraphMedium),
        body2: (0, $bdjGp$ParagraphSmall)
    };
    const Component = map[variant] || map["body1"];
    return /*#__PURE__*/ (0, $bdjGp$react).createElement(Component, rest, children);
};
var $b8292b6cbf615085$export$2e2bcd8739ae039 = $b8292b6cbf615085$var$Typography;




export {$f1f09cbc1dd39afc$export$2e2bcd8739ae039 as ThemeProvider, $aa3c9fe7758a8b0a$export$2e2bcd8739ae039 as Layout, $f34df96c6a04241d$export$2e2bcd8739ae039 as Footer, $8f15d3b9510ac3e2$export$2e2bcd8739ae039 as Breadcrumbs, $3a520e87397905ce$export$2e2bcd8739ae039 as PlainList, $95d60992a991452a$export$2e2bcd8739ae039 as Link, $b8292b6cbf615085$export$2e2bcd8739ae039 as Typography};
//# sourceMappingURL=module.js.map
