import React, { useState } from 'react';
import { Modal, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import { generateImage } from '../../../lib/utils';
import { BASE_URL } from '@/config';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const ImageUpload: React.FC = ({fileList, onChange, fileNumber=10, listType="picture-card"}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [status, setStatus] = useState('')

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;


    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
  };

  const handleCancel = () => setPreviewOpen(false);
  const handleChange = async(file) => {
    onChange(file)
    try {
      setStatus("uploading")
      const res = await generateImage(file[0])
      if (res) setStatus('done')
    } catch (error) {
      
      setStatus('error')
    }
    
  }


  return (
    <>
    <ImgCrop rotationSlider>

      {<Upload
        action={`${BASE_URL}/api/upload_file`}
        listType={listType}
        fileList={fileList}
        onChange={handleChange}
        onPreview={onPreview}
      >
        {fileList.length < fileNumber && '+ Upload'}
      </Upload>}
    </ImgCrop>
    
    
    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    
    
    </>
  );
};

export default ImageUpload;