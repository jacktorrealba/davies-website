import { format } from 'date-fns';

export const formatDate = (date) => {
    return format(new Date(date), 'dd MMMM yyyy');
};

export const formatDateDefault = (datetime) => {
    const date = new Date(datetime);
    return date.toISOString().slice(0,10);
}