import styled from 'styled-components'; 

const defaultTextStyles = (theme) =>`
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`; 

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const bodyCenter = (theme) => `
    font-size: ${theme.fontSizes.body};
    text-align: center;
`

const bold = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.bold};
`;

const heading = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
`;

const headingInverse = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.inverse}; 
`;

const boldInverse = (theme) =>`
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.inverse}
`

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.thin};
    padding-left: ${theme.space[1]}
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = { 
    body,
    bodyCenter, 
    heading,
    headingInverse,
    label, 
    caption, 
    error, 
    bold,
    boldInverse
}

export const Text = styled.Text`
    ${({ theme }) => defaultTextStyles(theme)}
    ${({ variant, theme }) => variants[variant](theme)}
`; 

Text.defaultProps = {
    variant: "body"
}; 