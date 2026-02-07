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

export default function CallRecordingsSection(props: {settingsList: React.ReactNode[]}) {
    const {formatMessage} = useIntl();
    const restricted = useSelector(isOnPremNotEnterprise);
    const cloud = useSelector(isCloud);

    // Not available in Cloud or Team Edition
    if (cloud || restricted) {
        return null;
    }

    return (
        <div
            className='config-section'
            data-testid={'calls-recordings-section'}
        >
            <div className='admin-console__wrapper'>
                <div className='admin-console__content'>
                    <div className='section-header'>
                        <SectionTitle className='section-title'>
                            {formatMessage({defaultMessage: 'Call recordings'})}
                            {!cloud && <EnterprisePill>{untranslatable('Enterprise')}</EnterprisePill>}
                        </SectionTitle>
                        <div className='section-subtitle'>
                            {formatMessage({defaultMessage: 'Recordings include the entire call window view along with participants’ audio track and any shared screen video. Recordings are stored in Mattermost'})}
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
