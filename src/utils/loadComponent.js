import Loadable from 'react-loadable';
import Loading from 'components/Loading'

export default function loadComponent(config){
    return Loadable({
        loading: Loading,
        timeout: 10000,
        ...config,
    });
}