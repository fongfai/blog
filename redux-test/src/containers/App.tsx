import React, { Component } from "react";
// import axios from "axios";
// import { getQueryParams } from '@xmly/uplus-middleware';
import DrawingBoardChart from "@xmly/rocket-pipeline-chart";
// import * as dashApis from '@/apis/databoard/dash';
interface Props {
  chartId: string;
  style: object;
  ThrottlingAggregate: any;
  module?: {
    isEditor: boolean;
    [propName: string]: any;
  };
}

class MainChart extends Component<Props> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { chartId = 'test', style, module = null } = this.props;

    const getAggregateAxios =
      (queryParams = {}) =>
      (data: any, queryId: any) => {
        return new Promise(function (resolve) {
          setTimeout(() => {
            resolve({
              target: [
                {
                  name: "日期",
                  key: "date",
                },
                {
                  name: "分享次数",
                  key: "number",
                },
                {
                  name: "分享人数",
                  key: "number",
                },
              ],
              source: [
                [
                  "2019-07-14",
                  "2019-07-15",
                  "2019-07-16",
                  "2019-07-17",
                  "2019-07-18",
                  "2019-07-19",
                  "2019-07-20",
                  "2019-07-21",
                  "2019-07-22",
                  "2019-07-23",
                  "2019-07-24",
                  "2019-07-25",
                  "2019-07-26",
                  "2019-07-27",
                  "2019-07-28",
                  "2019-07-29",
                  "2019-07-30",
                  "2019-07-31",
                  "2019-08-01",
                  "2019-08-02",
                  "2019-08-03",
                  "2019-08-04",
                  "2019-08-05",
                  "2019-08-06",
                  "2019-08-07",
                  "2019-08-08",
                  "2019-08-09",
                  "2019-08-10",
                  "2019-08-11",
                  "2019-08-12",
                  "2019-08-13",
                  "2019-08-14",
                  "2019-08-15",
                  "2019-08-16",
                  "2019-08-17",
                  "2019-08-18",
                  "2019-08-19",
                  "2019-08-20",
                  "2019-08-21",
                  "2019-08-22",
                  "2019-08-23",
                  "2019-08-24",
                  "2019-08-25",
                  "2019-08-26",
                  "2019-08-27",
                  "2019-08-28",
                  "2019-08-29",
                  "2019-08-30",
                  "2019-08-31",
                  "2019-09-01",
                  "2019-09-02",
                  "2019-09-03",
                  "2019-09-04",
                  "2019-09-05",
                  "2019-09-06",
                  "2019-09-07",
                  "2019-09-08",
                ],
                [
                  2836, 2680, 2860, 2974, 2742, 2878, 2881, 2503, 3232, 3047,
                  3042, 3654, 3841, 3215, 3521, 4027, 5174, 5620, 5296, 5317,
                  4950, 5655, 4791, 4559, 5104, 4153, 4599, 4771, 4612, 4123,
                  3967, 4039, 4460, 4181, 4476, 4256, 3731, 3915, 3836, 4264,
                  5187, 6969, 7017, 6761, 8647, 9750, 8952, 7093, 7012, 6729,
                  6850, 6042, 7449, 7664, 6257, 7595, 8236,
                ],
                [
                  793, 747, 797, 808, 833, 782, 784, 732, 908, 900, 938, 1019,
                  961, 879, 1007, 1185, 1362, 1301, 1312, 1289, 1290, 1338,
                  1258, 1254, 1295, 1193, 1303, 1352, 1335, 1199, 1156, 1176,
                  1178, 1158, 1254, 1271, 1145, 1099, 1224, 1230, 1199, 1121,
                  1189, 1135, 1325, 1460, 1365, 1108, 1118, 1089, 918, 985, 929,
                  901, 887, 1061, 1067,
                ],
              ],
            });
          }, 30);
        });
      };
    const chartStyle = {
      padding: "4px 3px 2px 3px",
      boxShadow: "none",
      ...style,
    };
    return (
      <div>
        <DrawingBoardChart
          key={chartId}
          customStyle={chartStyle}
          chartModule={module}
          aggregateAxios={getAggregateAxios()}
          accessServer
          supportLoading
        />
      </div>
    );
  }
}

export default MainChart;
