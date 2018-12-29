<template>
    <div class="hello">
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary" @click="login">登录按钮</el-button>
            <el-button type="success" @click="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="text" @click="addData">新增数据</el-button>
            <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        </el-row>
        <h1>{{msg}}</h1>
        <div v-for="item in items">
            <label>{{ item | percentage }}</label>
        </div>
        <el-checkbox-group
                v-model="checkedCities1"
                :min="1"
                :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

        <el-table
                :data="tableData"
                border
                fit='fit'
                style="">
            <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="省份"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="市区"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="300">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.address }}</span>
                    <el-input v-model="scope.row.address" placeholder="请输入内容"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="邮编"
                    width="120">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total,prev, pager, next, sizes,jumper"
                :total="400">
        </el-pagination>


        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>{{content}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                 <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script src="./list.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
