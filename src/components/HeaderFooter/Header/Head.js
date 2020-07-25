import React, { Suspense } from 'react';

const Desktop = React.lazy(() => import('./HeaderDesktop'));
const Mobile = React.lazy(() => import('./HeaderMobile'));

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null
        };
    }
    componentDidMount() {
        this.setState({ width: window.innerWidth });
        window.addEventListener('resize', () => {
            this.setState({ width: window.innerWidth });
        });
    }

    render() {
        const { width } = this.state;

        return (
            <Suspense fallback={<div>loading...</div>}>
                {
                    width > 1000 ?
                    <Desktop />:
                    <Mobile />

                }
            </Suspense>
        )
    }
}

// {/*<div className='header__mobile'>*/}
// {/*    mobile version*/}
// {/*</div>*/}