import React , {useState , useEffect , useMemo} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./grid.css";


function Grid ({ title,config, data }) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableHeaders = useMemo(()=>{
    let headers = {};
    Object.assign(headers, ...config.map((c) => ({[c.field]: c})));
    return headers;
  },[])


  return(
    <div className="Grid">
      <h2><b>{title}</b></h2>
      <Paper sx={{ width: '95%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    {Object.keys(tableHeaders).map(title => (
                        <TableCell key={title}>{title}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
            {
            data.length > 0 ? 
            (rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): data).map((item) => (
                <TableRow key={item.number? item.number: item.imdbID}>

                  {Object.keys(item).map(function(key){
                      if(tableHeaders[key].component)
                        return <TableCell>{ tableHeaders[key].component(item[tableHeaders[key].field])}</TableCell>
                      else
                        return <TableCell>{item[tableHeaders[key].field]}</TableCell>
                  })}

                </TableRow>
              )): <p> Cant Find any Data</p>
            }
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    </div>
  )
};

export default Grid;