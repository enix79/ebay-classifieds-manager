import React, { useState, useRef } from 'react';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { AttachFile } from '@mui/icons-material';

export interface FileSelectProps {
    label: string;
    accept: string;
    onFileSelection: any;
}

// https://github.com/mui/material-ui/issues/9716#issuecomment-1351611268
const FileSelect: React.FC<FileSelectProps> = ({
    label,
    accept,
    onFileSelection,
}) => {
    const [files, setFiles] = useState<File[] | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const files = Array.from(e.target.files);
        setFiles(files);
        onFileSelection(files[0]);
    };

    const getFileNames = () =>
        files?.reduce(
            (fileNames, file) =>
                `${fileNames} ${fileNames !== '' ? ',' : ''} ${file.name}`,
            ''
        ) || '';

    return (
        <Box position="relative" height={57} width="100%">
            <Box position="absolute" width="100%">
                <TextField
                    fullWidth
                    label={label}
                    value={getFileNames()}
                    required
                    sx={{ pointerEvents: 'none' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <AttachFile />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Button
                component="label"
                onKeyDown={(e) => e.key === '32' && ref.current?.click()}
                fullWidth
                sx={{ height: '100%' }}
            >
                <input
                    ref={ref}
                    type="file"
                    onChange={handleChange}
                    accept={accept}
                    hidden
                    multiple
                />
            </Button>
        </Box>
    );
};

export default FileSelect;
