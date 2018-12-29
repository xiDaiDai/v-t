import axios from 'axios'

const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
    name: 'list',
    data () {
        return {
            msg: "我是list 组件",
            items: [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8],
            checkedCities1: ['上海', '北京'],
            cities: cityOptions,
            dialogVisible: false,
            content:'',
            fit:true,
            currentPage4: 1,
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        handleClose() {
            this.dialogVisible = false;
        },
        addData(){
            this.items =  this.items.concat([2,2,2,2,2]);
            this.content = this.items.join(',');
        },
        handleClick(row){
            console.log(row)
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleNodeClick(data) {
            console.log(data);
        },
        success () {
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        },
        async login(){
            let data = await axios.get('/snjt-cpu-portal/mobilelogin/devlogin?username=snjt_admin&password=123456b')
            console.log(data);
        }
    }
}