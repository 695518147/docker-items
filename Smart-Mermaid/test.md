# SpringMVC 请求处理流程时序图

```mermaid
sequenceDiagram
    participant Client as "客户端"
    participant DS as "DispatcherServlet<br/>(前端控制器)"
    participant HM as "HandlerMapping<br/>(处理器映射器)"
    participant HA as "HandlerAdapter<br/>(处理器适配器)"
    participant Controller as "Controller<br/>(控制器)"
    participant Service as "Service<br/>(业务层)"
    participant DAO as "DAO<br/>(数据访问层)"
    participant DB as "Database<br/>(数据库)"
    participant VR as "ViewResolver<br/>(视图解析器)"
    participant View as "View<br/>(视图)"

    Note over Client,View: SpringMVC请求处理流程

    Client->>DS: 1. 发送HTTP请求
    activate DS
    
    DS->>HM: 2. 根据请求URL查找Handler
    activate HM
    HM-->>DS: 3. 返回HandlerExecutionChain
    deactivate HM
    
    DS->>HA: 4. 获取HandlerAdapter
    activate HA
    HA-->>DS: 5. 返回HandlerAdapter实例
    deactivate HA
    
    DS->>HA: 6. 执行拦截器preHandle()
    activate HA
    HA->>Controller: 7. 调用Handler方法
    activate Controller
    
    Controller->>Service: 8. 调用业务逻辑
    activate Service
    
    Service->>DAO: 9. 数据访问操作
    activate DAO
    
    DAO->>DB: 10. 执行SQL查询/更新
    activate DB
    DB-->>DAO: 11. 返回数据结果
    deactivate DB
    
    DAO-->>Service: 12. 返回数据对象
    deactivate DAO
    
    Service-->>Controller: 13. 返回业务结果
    deactivate Service
    
    Controller-->>HA: 14. 返回ModelAndView
    deactivate Controller
    
    HA->>HA: 15. 执行拦截器postHandle()
    HA-->>DS: 16. 返回ModelAndView
    deactivate HA
    
    DS->>VR: 17. 解析视图名称
    activate VR
    VR-->>DS: 18. 返回View对象
    deactivate VR
    
    DS->>View: 19. 渲染视图
    activate View
    View-->>DS: 20. 返回渲染结果
    deactivate View
    
    DS->>HA: 21. 执行拦截器afterCompletion()
    DS-->>Client: 22. 返回HTTP响应
    deactivate DS

    Note over Client,View: 请求处理完成
```

## 流程说明

### 主要组件
- **DispatcherServlet**: SpringMVC的前端控制器，负责统一调度
- **HandlerMapping**: 处理器映射器，根据URL找到对应的Handler
- **HandlerAdapter**: 处理器适配器，执行具体的Handler方法
- **Controller**: 控制器，处理具体的业务请求
- **Service**: 业务逻辑层，处理业务逻辑
- **DAO**: 数据访问层，负责数据库操作
- **ViewResolver**: 视图解析器，解析逻辑视图名
- **View**: 视图，负责渲染页面

### 关键步骤
1. **请求接收**: DispatcherServlet接收客户端HTTP请求
2. **Handler查找**: 通过HandlerMapping找到对应的处理器
3. **Handler执行**: 通过HandlerAdapter执行具体的Controller方法
4. **业务处理**: Controller调用Service层处理业务逻辑
5. **数据访问**: Service层通过DAO访问数据库
6. **视图处理**: DispatcherServlet通过ViewResolver解析并渲染视图
7. **响应返回**: 将处理结果返回给客户端

### 拦截器机制
- **preHandle()**: 在Handler执行前调用
- **postHandle()**: 在Handler执行后、视图渲染前调用  
- **afterCompletion()**: 在整个请求完成后调用