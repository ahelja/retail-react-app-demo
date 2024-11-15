/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {extendTheme} from '@overrides/app/components/shared/ui'

// Foundational style overrides
import styles from '@overrides/app/theme/foundations/styles'
import colors from '@overrides/app/theme/foundations/colors'
import gradients from '@overrides/app/theme/foundations/gradients'
import sizes from '@overrides/app/theme/foundations/sizes'
import space from '@overrides/app/theme/foundations/space'
import layerStyles from '@overrides/app/theme/foundations/layerStyles'
import shadows from '@overrides/app/theme/foundations/shadows'

// Base component style overrides
import Alert from '@overrides/app/theme/components/base/alert'
import Accordion from '@overrides/app/theme/components/base/accordion'
import Badge from '@overrides/app/theme/components/base/badge'
import Button from '@overrides/app/theme/components/base/button'
import Checkbox from '@overrides/app/theme/components/base/checkbox'
import Container from '@overrides/app/theme/components/base/container'
import Drawer from '@overrides/app/theme/components/base/drawer'
import FormLabel from '@overrides/app/theme/components/base/formLabel'
import Icon from '@overrides/app/theme/components/base/icon'
import Input from '@overrides/app/theme/components/base/input'
import Modal from '@overrides/app/theme/components/base/modal'
import Radio from '@overrides/app/theme/components/base/radio'
import Select from '@overrides/app/theme/components/base/select'
import Skeleton from '@overrides/app/theme/components/base/skeleton'
import Tooltip from '@overrides/app/theme/components/base/tooltip'
import Popover from '@overrides/app/theme/components/base/popover'

// Project Component style overrides
import App from '@overrides/app/theme/components/project/_app'
import Breadcrumb from '@overrides/app/theme/components/project/breadcrumb'
import Header from '@overrides/app/theme/components/project/header'
import ListMenu from '@overrides/app/theme/components/project/list-menu'
import Footer from '@overrides/app/theme/components/project/footer'
import CheckoutFooter from '@overrides/app/theme/components/project/checkout-footer'
import LinksList from '@overrides/app/theme/components/project/links-list'
import DrawerMenu from '@overrides/app/theme/components/project/drawer-menu'
import NestedAccordion from '@overrides/app/theme/components/project/nested-accordion'
import LocaleSelector from '@overrides/app/theme/components/project/locale-selector'
import OfflineBanner from '@overrides/app/theme/components/project/offline-banner'
import Pagination from '@overrides/app/theme/components/project/pagination'
import ProductTile from '@overrides/app/theme/components/project/product-tile'
import SocialIcons from '@overrides/app/theme/components/project/social-icons'
import SwatchGroup from '@overrides/app/theme/components/project/swatch-group'
import ImageGallery from '@overrides/app/theme/components/project/image-gallery'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.
export const overrides = {
    styles,
    layerStyles,
    colors,
    sizes,
    space,
    gradients,
    shadows,
    components: {
        // base components
        Accordion,
        Alert,
        Badge,
        Button,
        Checkbox,
        Container,
        Drawer,
        FormLabel,
        Icon,
        Input,
        Modal,
        Popover,
        Radio,
        Select,
        Skeleton,
        Tooltip,

        // project components
        App,
        Breadcrumb,
        Header,
        Footer,
        CheckoutFooter,
        LinksList,
        ListMenu,
        DrawerMenu,
        NestedAccordion,
        LocaleSelector,
        OfflineBanner,
        SocialIcons,
        Pagination,
        ProductTile,
        SwatchGroup,
        ImageGallery
    }
}

export default extendTheme(overrides)
