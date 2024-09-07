import React, {useState} from 'react';
import {Input, message, Modal} from 'antd';

interface RentalDurationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (duration: number) => void;
}

const RentalDurationModal: React.FC<RentalDurationModalProps> = ({isOpen, onClose, onConfirm}) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [duration, setDuration] = useState<number | null>(1);

    const handleOk = () => {
        if (duration === null || duration < 1 || duration > 100) {
            message.error('Please enter a valid rental duration between 1 and 100 days.');
            return;
        }

        setConfirmLoading(true);
        // Trigger the confirmation action (empty for now as per your request)
        onConfirm(duration);
        setConfirmLoading(false);
        onClose();
    };

    const handleChange = (value: string) => {
        const numericValue = Number(value);
        if (numericValue >= 1 && numericValue <= 100) {
            setDuration(numericValue);
        }
    };

    return (
        <Modal
            title="Enter Rental Duration"
            open={isOpen}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={onClose}
            okType={'primary'}
            okText={'Confirm'}
            cancelText={'Cancel'}
            okButtonProps={{style: {backgroundColor: 'black', borderColor: 'black'}}}
        >
            <Input
                type="number"
                min={1}
                max={100}
                value={duration ?? 1}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Enter duration in days (1 - 100)"
            />
        </Modal>
    );
};

export default RentalDurationModal;
