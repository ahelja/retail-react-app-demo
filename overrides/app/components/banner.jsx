import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'

const Banner = ({message, backgroundColor, textColor}) => {
    return (
        <Box
            bg={backgroundColor || 'gray.100'}
            color={textColor || 'gray.800'}
            p={5}
            textAlign="center"
            borderRadius="md"
            m={3}
        >
            {message}
        </Box>
    )
}

Banner.propTypes = {
    message: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Banner
