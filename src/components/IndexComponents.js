import React, {Component} from 'react';

// UM
import {UserQuery} from './UM/UserQuery';
import {LoginStatistics} from './UM/LoginStatistics';
import {BehaviorAnalysis} from './UM/BehaviorAnalysis';

// AM
import {RoleManagement} from './AM/RoleManagement';
import {BindingSettings} from './AM/BindingSettings';
import {LimitSettings} from './AM/LimitSettings';
import {UserRightsSettings} from './AM/UserRightsSettings';
import {UserRestrictions} from './AM/UserRestrictions';
import {RolePermissionSettings} from './AM/RolePermissionSettings';

// IM
import {ProductManagement} from './IM/ProductManagement';
import {ModuleManagement} from './IM/ModuleManagement';
import {ClassLibraryManagement} from './IM/ClassLibraryManagement';
import {FunctionalManagement} from './IM/FunctionalManagement';
import {ResourceManagement} from './IM/ResourceManagement';
import {MenuManagement} from './IM/MenuManagement';

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