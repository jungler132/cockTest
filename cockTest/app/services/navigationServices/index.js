import { CommonActions } from '@react-navigation/native';

const config = {};

export function setNavigator(nav) {
    if (nav) {
        config.navigator = nav;
    }
};

export function navigate(routeName, params) {
    if (config.navigator && routeName) {
        const action = CommonActions.navigate({ name: routeName, params });

        config.navigator.dispatch(action);
    }
};
