import { Wrapper } from './styled.js'

export const Result = ({ result }) => (

    <Wrapper>
        {result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </Wrapper>
);