 # Smart-Mermaid

## 项目简介

Smart-Mermaid 是一款基于 AI 技术的 Web 应用程序，可将文本内容智能转换为 Mermaid 格式的代码，并将其渲染成可视化图表。

## 主要特性

- 🤖 **AI 智能转换**：利用人工智能技术，将自然语言描述智能转换为 Mermaid 代码
- 📊 **多种图表类型**：支持流程图、序列图、甘特图、状态图等多种图表类型
- 🎨 **在线编辑**：支持在线调整图表内容和样式
- 📸 **图片导出**：支持将生成的图表导出为图片格式
- 🐳 **Docker 部署**：支持 Docker 快速部署，简化安装过程
- 🔧 **自定义模型**：支持自定义选择大语言模型，灵活配置

## 快速开始

### 使用 Docker Compose 部署

1. 确保已安装 Docker 和 Docker Compose

2. 克隆或下载项目文件

3. 修改 `docker-compose.yml` 文件中的环境变量：
   ```yaml
   environment:
     - AI_API_URL=https://api.deepseek.com  # 修改为你的 AI API 地址
     - AI_API_KEY=your-api-key              # 修改为你的 API Key
     - AI_MODELS=deepseek-reasoner,deepseek-chat  # 可选的模型列表
     - ACCESS_PASSWORD=your-password        # 访问密码（可选）
   ```

4. 启动服务：
   ```bash
   docker-compose up -d
   ```

5. 访问应用：
   打开浏览器访问 `http://localhost:3000`

### 环境变量说明

| 变量名 | 说明 | 必填 |
|--------|------|------|
| AI_API_URL | AI API 服务地址 | 是 |
| AI_API_KEY | AI API 密钥 | 是 |
| AI_MODEL_NAME | 默认模型名称 | 否 |
| AI_MODELS | 可选模型列表（逗号分隔） | 否 |
| ACCESS_PASSWORD | 访问密码 | 否 |

## 使用方法

1. 在浏览器中打开应用
2. 输入你想要转换为图表的文本描述
3. 选择合适的图表类型
4. 点击生成按钮，AI 将自动生成 Mermaid 代码
5. 预览生成的图表
6. 可以在线编辑调整图表内容
7. 导出图表为图片格式

## 技术栈

- 前端：基于现代 Web 技术构建
- 后端：Node.js
- AI 集成：支持多种大语言模型
- 容器化：Docker

## 开源地址

本项目基于开源项目构建，原项目地址：
[https://github.com/liujuntao123/smart-mermaid](https://github.com/liujuntao123/smart-mermaid)

## 许可证

请参考原项目的许可证信息。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 支持

如果你在使用过程中遇到问题，可以：
1. 查看原项目的文档和 Issue
2. 提交新的 Issue 描述问题
3. 参与社区讨论