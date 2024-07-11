import { Grid } from 'react-loader-spinner';

export default function Loader() {

    return (
        <div className='container mx-auto flex justify-center items-center max-h-full'>
            <Grid
                visible={true}
                height="80"
                width="80"
                color="black"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
        </div>
    )
}