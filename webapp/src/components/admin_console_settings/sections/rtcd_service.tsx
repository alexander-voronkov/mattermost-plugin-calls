// Copyright (c) 2020-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';
import {useSelector} from 'react-redux';
import {
    EnterprisePill,
    SectionTitle,
} from 'src/components/admin_console_settings/common';
import {isCloud, isOnPremNotEnterprise} from 'src/selectors';
import {untranslatable} from 'src/utils';

export default function RTCDServiceSection(props: {settingsList: React.ReactNode[]}) {
    const {formatMessage} = useIntl();
    const restricted = useSelector(isOnPremNotEnterprise);
    const cloud = useSelector(isCloud);

    // Hide enterprise upsell for Team Edition
    if (restricted) {
        return null;
    }

    return (
        <div
            className='config-section'
            data-testid={'calls-rtcd-service-section'}
        >
            <div className='admin-console__wrapper'>
                <div className='admin-console__content'>
                    <div className='section-header'>
                        <SectionTitle className='section-title'>
                            {formatMessage({defaultMessage: 'RTCD Service'})}
                            {!cloud && <EnterprisePill>{untranslatable('Enterprise')}</EnterprisePill>}
                        </SectionTitle>
                        <div className='section-subtitle'>
                            {formatMessage({defaultMessage: 'Configure a dedicated service used to offload calls and efficiently support scalable and secure deployments'})}
                        </div>
                    </div>
                    <div className='section-body'>
                        {props.settingsList}
                    </div>
                </div>
            </div>
        </div>
    );
}
