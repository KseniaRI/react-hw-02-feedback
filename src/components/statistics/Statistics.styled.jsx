import styled from '@emotion/styled';

export const StatisticList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:fit-content;
    margin: 0 auto;
`;

export const StatisticItem = styled.p`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 500;

    & svg {
        margin-right: 20px;
    }
    & svg:hover,
    & svg:focus {
          stroke-width: 1px;  
        }
`

export const StatisticValue = styled.span`
    font-weight: 400;
    margin-left: 10px;
`