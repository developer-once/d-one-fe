import React, { useLayoutEffect, useState } from 'react';
import { Table } from 'antd';

interface ITableColumns {
  key: string;
  title: string;
  dataIndex?: string;
  sorter?: boolean;
  render?: Function;
}

interface ITableComponentProps {
  columns?: Array<ITableColumns | any>;
  dataSource?: Array<any>;
  page?: number;
  total?: number;
  onChange?: (value: number) => void;
}

const TableComponent = (props: ITableComponentProps) => {
  const {
    columns,
    dataSource = [],
    page = 1,
    total = 1,
    onChange = (value: number) => {},
  } = props;

  useLayoutEffect(() => {}, []);

  const pagination = {
    current: page,
    pageSize: 10,
    total: total,
  }

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={pagination}
        onChange={(pagination: any) => {
          console.log(pagination);
          onChange(pagination.current)
        }}
      />
    </div>
  )
}

export default TableComponent;