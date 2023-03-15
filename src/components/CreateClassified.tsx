import {
    MenuItem,
    Select,
    TextField,
    InputLabel,
    FormControl,
    Container,
    Unstable_Grid2 as Grid,
    Typography,
    Switch,
    FormControlLabel,
    Button,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { PriceType } from '../types';
import { SelectChangeEvent } from '@mui/material/Select';
import FileSelect from './FileSelect';

export interface CreateClassifiedProps {}

const CreateClassified: FC<CreateClassifiedProps> = () => {
    const [priceType, setPriceType] = useState<PriceType>('fixed');
    const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);
    const changePriceType = (event: SelectChangeEvent) => {
        setPriceType(event.target.value as PriceType);
    };
    const onFileSelection = (files: File[] | null) => {
        setSelectedFiles(files);
    };
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Neue Kleinanzeige erstellen
            </Typography>
            <Grid container component="form" spacing={1}>
                <Grid xs={12}>
                    <TextField fullWidth label="Titel"></TextField>
                </Grid>
                <Grid xs={12}>
                    <TextField fullWidth label="Kategorie"></TextField>
                </Grid>
                <Grid xs={12}>
                    <FormControlLabel
                        control={
                            <Switch
                                inputProps={{
                                    'aria-label': 'shipping is possible',
                                }}
                            />
                        }
                        label="Versand möglich"
                    />
                </Grid>
                <Grid xs={9}>
                    <TextField fullWidth label="Preis"></TextField>
                </Grid>
                <Grid xs={3}>
                    <FormControl fullWidth>
                        <InputLabel id="price-type-select-label">
                            Preistyp
                        </InputLabel>
                        <Select
                            labelId="price-type-select-label"
                            id="price-type-select"
                            value={priceType}
                            label="Preistyp"
                            onChange={changePriceType}
                        >
                            <MenuItem value="fixed">Festpreis</MenuItem>
                            <MenuItem value="negotiation">VB</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12}>
                    <TextField
                        multiline
                        rows={6}
                        fullWidth
                        label="Beschreibung"
                    ></TextField>
                </Grid>
                <Grid xs={12}>
                    <FileSelect
                        label="Bilder Uploaden"
                        accept="*"
                        onFileSelection={onFileSelection}
                    />
                </Grid>
                <Grid xs={12}>
                    <Button fullWidth variant="contained">
                        Erstellen
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CreateClassified;
