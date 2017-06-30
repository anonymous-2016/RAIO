import React, {Component} from 'react';

import {UserQuery} from './UserQuery';
import {LoginStatistics} from './LoginStatistics';
import {BehaviorAnalysis} from './BehaviorAnalysis';

import {RoleManagement} from './RoleManagement';
import {BindingSettings} from './BindingSettings';
import {LimitSettings} from './LimitSettings';
import {UserRightsSettings} from './UserRightsSettings';
import {UserRestrictions} from './UserRestrictions';
import {RolePermissionSettings} from './RolePermissionSettings';

import {ProductManagement} from './ProductManagement';
import {ModuleManagement} from './ModuleManagement';
import {ClassLibraryManagement} from './ClassLibraryManagement';
import {FunctionalManagement} from './FunctionalManagement';
import {ResourceManagement} from './ResourceManagement';
import {MenuManagement} from './MenuManagement';

class IndexComponents extends Component {
    render() {
        return (
            <div>
                <h1>索引组件 IndexComponents</h1>
                <div>
                    <UserQuery />
                    <LoginStatistics />
                    <BehaviorAnalysis />
                </div>
                <hr/>
                <div>
                    <RoleManagement />
                    <BindingSettings />
                    <LimitSettings />
                    <UserRightsSettings />
                    <UserRestrictions />
                    <RolePermissionSettings />
                </div>
                <hr/>
                <div>
                    <ProductManagement />
                    <ModuleManagement />
                    <ClassLibraryManagement />
                    <FunctionalManagement />
                    <ResourceManagement />
                    <MenuManagement />
                </div>
            </div>
        );
    }
}

export {IndexComponents};
export default IndexComponents;