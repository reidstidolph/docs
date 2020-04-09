(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(1),i=t(11),r=(t(0),t(238)),o={title:"Tenants",sidebar_label:"Tenants"},s={id:"config_tenants",title:"Tenants",description:"Tenancy is a powerful concept unique to the 128T router that allows administrators to create partitions within their network in order to segment access to network services. A tenant is effectively a network \u201cperimeter\u201d that defines a grouping of devices, and creates a _de facto_ trust zone. All users within a tenant, by default, are given access to the same set of services; or, said another way, members of a tenant share common _network policy_.",source:"@site/docs/config_tenants.md",permalink:"/docs/config_tenants",editUrl:"https://github.com/128technology/docs/tree/master/docs/config_tenants.md",lastUpdatedAt:1583351810,sidebar_label:"Tenants",sidebar:"docs",previous:{title:"SNMP: User defined metrics",permalink:"/docs/config_snmp_metrics"},next:{title:"Configuration Templates",permalink:"/docs/config_templates"}},c=[{value:"Modeling Your Network Tenancy",id:"modeling-your-network-tenancy",children:[]},{value:"Adding Tenants",id:"adding-tenants",children:[]},{value:"Tenancy by Subnet",id:"tenancy-by-subnet",children:[]},{value:"Tenancy by Interface",id:"tenancy-by-interface",children:[]},{value:"Subtenant Hierarchies",id:"subtenant-hierarchies",children:[]},{value:"The Global Tenant",id:"the-global-tenant",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Tenancy is a powerful concept unique to the 128T router that allows administrators to create partitions within their network in order to segment access to network services. A tenant is effectively a network \u201cperimeter\u201d that defines a grouping of devices, and creates a ",Object(r.b)("em",{parentName:"p"},"de facto")," trust zone. All users within a tenant, by default, are given access to the same set of services; or, said another way, members of a tenant share common ",Object(r.b)("em",{parentName:"p"},"network policy"),"."),Object(r.b)("h2",{id:"modeling-your-network-tenancy"},"Modeling Your Network Tenancy"),Object(r.b)("p",null,'A tenant represents the basic means for grouping collections of devices together into a network segment. All devices within a tenant are treated with a common policy, and thereby will have consistent access to the services that have been "published" to the tenant.'),Object(r.b)("p",null,"Each tenant, as modeled on your 128T router, has its own segment of the router's Forwarding Information Base (FIB) for making forwarding decisions for packets it receives. As services are made available to a tenant, entries are populated into the router's FIB, keyed by that tenant's name; members of that tenant will have routes to respective service, and non-members will not \u2013 all without the use of complex access controls or external firewalling."),Object(r.b)("p",null,"The 128T router gives administrators several ways to define/describe how inbound packets are mapped to tenants: by matching the source IP address of inbound packets to configured IP prefixes within a network neighborhood, or based upon their ingress network-interface. (When both are in use on the same system, ",Object(r.b)("em",{parentName:"p"},"the network-interface\u2019s tenant will take precedence if both apply"),".)"),Object(r.b)("p",null,"Each method for identifying inbound tenancy will be discussed in the sections that follow."),Object(r.b)("h2",{id:"adding-tenants"},"Adding Tenants"),Object(r.b)("p",null,"Once you\u2019ve decided upon a partitioning scheme for your users and their network services, creating basic tenants is a straightforward exercise."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@labsystem1.burlington# config authority\nadmin@labsystem1.burlington (authority)# tenant engineering\nadmin@labsystem1.burlington (tenant[name=engineering])# description "engineering division"\nadmin@labsystem1.burlington (tenant[name=engineering])# security internal\nadmin@labsystem1.burlington (tenant[name=engineering])# show\nname         engineering\ndescription  "engineering division"\nsecurity     internal\n')),Object(r.b)("p",null,"It may not look like much, but you\u2019ve created a tenant!"),Object(r.b)("p",null,"The field ",Object(r.b)("inlineCode",{parentName:"p"},"security")," refers to another configuration element on the system (a security policy), which governs how the 128T router encrypts and authenticates packets it receives and forwards. In this example we refer to a security element that comes installed on all 128T routers by default, the one called ",Object(r.b)("inlineCode",{parentName:"p"},"internal"),". If you typed ",Object(r.b)("inlineCode",{parentName:"p"},"security internal")," and the 128T router reported an error saying that it could not resolve the reference, then this part of your default configuration was missing. Don\u2019t worry, creating a new security policy is just as simple as creating a tenant, a few short configuration steps."),Object(r.b)("p",null,"This represents the minimum amount of configuration required to create a simple tenant partition. Later, as we configure services to make available to this tenant, you will see how this partition serves to segment these services from all other tenants, and from all other services."),Object(r.b)("h2",{id:"tenancy-by-subnet"},"Tenancy by Subnet"),Object(r.b)("p",null,"Administrators can also use subnets to define the composition of a tenant. This is done within the tenant\u2019s configuration, where a list of one or more subnets is specified within a neighborhood. These subnets are applicable to the interfaces that contain these neighborhoods, unless an interface has an explicitly assigned tenant (as we will see in the next section). Any lead packet of a session that arrives on any tenantless interface is matched to the provisioned subnets of all neighborhoods within the tenants to determine tenant membership. (Said another way, the ingress interface has zero or more neighborhoods configured on it; for each of these neighborhoods, the source IP address is matched to tenant ",Object(r.b)("em",{parentName:"p"},"members")," to see if this IP address can be affiliated with a tenant.) This is then used as part of the FIB\u2019s lookup key, to determine disposition of that lead packet."),Object(r.b)("p",null,"Adding a list of one or more subnets to a tenant configuration is straightforward. In the example below we add three such subnets to the tenant we just created:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@labsystem1.burlington# conf authority\nadmin@labsystem1.burlington (authority)# tenant engineering\nadmin@labsystem1.burlington (tenant[name=engineering])# member HQnetwork\nadmin@labsystem1.burlington (member[neighborhood=HQnetwork])# address 172.17.128.0/24\nadmin@labsystem1.burlington (member[neighborhood=HQnetwork])# up\nadmin@labsystem1.burlington (tenant[name=engineering])# show\nname         engineering\ndescription  "engineering division"\nsecurity     internal\n\nmember       HQnetwork\n    neighborhood  HQnetwork\n    address       172.17.128.0/24\nexit\n')),Object(r.b)("p",null,'Any packet arriving on an interface that is configured with the \u201cHQnetwork\u201d neighborhood, and whose source IP falls within this subnet, will be assumed to be part of the \u201cengineering\u201d tenant. As mentioned, this will affect the scope of routes available to the inbound request, reducing it to only the set applicable to \u201cengineering."'),Object(r.b)("p",null,"Configuring a neighborhood on a network-interface is straightforward:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@labsystem1.burlington# config auth router burlington\nadmin@labsystem1.burlington (router[name=burlington])# node labsystem1\nadmin@labsystem1.burlington (node[name=labsystem1])# device-interface 12\nadmin@labsystem1.burlington (device-interface[id=12])# network-interface int12\nadmin@labsystem1.burlington (network-interface[name=int12])# neighborhood HQnetwork\nadmin@labsystem1.burlington (neighborhood[name=HQnetwork])# up\nadmin@labsystem1.burlington (network-interface[name=int12])# up\nadmin@labsystem1.burlington (device-interface[id=12])# up\nadmin@labsystem1.burlington (node[name=labsystem1])# show\nname              labsystem1\nid                1\ndescription       "Combo in Burlington datacenter"\nlocation          "Burlington, MA"\n\ndevice-interface  11\n    id                   11\n    description          "slot 1 port 1"\n    type                 ethernet\n    pci-address          0000:02:00.0\n    capture-filter       ip\n    shared-phys-address  00:00:5E:00:53:01\n\n    network-interface    ext11\n        name         ext11\n        description  "external interface"\n        vlan         0\n        type         external\n\n        address      198.51.100.128\n            ip-address     198.51.100.128\n            prefix-length  24\n        exit\n    exit\nexit\n\ndevice-interface  12\n    id                 12\n    description        "slot 1 port 2"\n    type               ethernet\n    pci-address        0000:05:00.0\n\n    network-interface  int12\n        name          int12\n        description   "internal interface"\n        vlan          0\n        type          shared\n\n        neighborhood  HQnetwork\n            name  HQnetwork\n        exit\n\n        address       172.16.0.1\n            ip-address     172.16.0.1\n            prefix-length  12\n        exit\n    exit\nexit\n')),Object(r.b)("h2",{id:"tenancy-by-interface"},"Tenancy by Interface"),Object(r.b)("p",null,"Each 128T router is a collection of one or more nodes, which represent the top of the hierarchy of a single deployment of 128T software. In turn, each node communicates with the IP network via device interfaces (physical interfaces) \u2013 physical connections to the network on bare metal systems, or bridged interfaces when the 128T software is deployed in virtual environments. On top of the device interfaces we build network interfaces (logical interfaces), or VLANs. The relationship in each of these levels of the hierarchy is many to one; i.e., there can be many device-interface elements per node, and many network-interface elements per device-interface."),Object(r.b)("p",null,"Each of these network-interfaces has an optional configuration field, tenant. By applying a tenant name to this interface, all packets received on this interface are presumed to belong to that tenant, ",Object(r.b)("em",{parentName:"p"},"even if the source IP address of that packet would indicate it is a member of a neighborhood-defined tenant"),". This restricts the set of routes available to sources that reach the 128T router via this interface to only those available to that tenant."),Object(r.b)("p",null,"This is accomplished by way of each router filtering the routes in its FIB to only those pertinent to the specific tenant. (I.e., the tenant becomes part of the lookup key into the FIB, so only routes matching the tenant will match.)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'admin# config authority\nadmin (authority)# router burlington\nadmin (router[name=burlington])# node node1\nadmin (node[name=slice1])# device-interface 12\nadmin (device-interface[id=11])# network-interface int12\nadmin (network-interface[name=int12])# tenant engineering\nHere is the finished configuration:\nadmin (network-interface[name=int12])# show\nname         int12\ndescription  "Engineering network"\nvlan         0\ntype         external\ntenant       engineering\n\naddress      10.1.0.1\n    ip-address     10.1.0.1\n    prefix-length  24\nexit\n')),Object(r.b)("p",null,"All inbound requests on this specific network-interface, considered part of the \u201cengineering\u201d tenant, will only be able to access services that are part of the engineering tenant, or those services in other tenants that have explicitly allowed (via access-policy) members of the engineering tenant. Using access-policy statements to control access \u2013 allowing or denying various user populations \u2013 is described in the section on Service configuration."),Object(r.b)("h2",{id:"subtenant-hierarchies"},"Subtenant Hierarchies"),Object(r.b)("p",null,"The 128T router not only allows you to partition your user population into various tenants, it allows for further segmentation of those tenants into \u201cfamilies\u201d of tenants \u2013 a hierarchical (family) tree, where subtenants (children) inherit properties from their parentage. When granting access to a service to a tenant, all children of that tenant are also granted access by default; however, the converse is not true. When a child tenant is granted access to a service, the parent tenant will not have routes to it."),Object(r.b)("p",null,"This allows for very fine-grained access control, where services and tenant families can be combined to give access to network services to very specific user populations."),Object(r.b)("p",null,"Here is an example of a subtenant, a further refinement of the \u201cengineering\u201d tenant that we created earlier:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'admin@labsystem1.burlington# config authority\nadmin@labsystem1.burlington (authority)# tenant dev.engineering\nadmin@labsystem1.burlington (tenant[name=dev.engineering])# member HQnetwork\nadmin@labsystem1.burlington (member[neighborhood=HQnetwork])# address 172.17.2.0/25\nadmin@labsystem1.burlington (member[neighborhood=HQnetwork])# up\nadmin@labsystem1.burlington (tenant[name=dev.engineering])# description "development team"\nadmin@labsystem1.burlington (tenant[name=dev.engineering])# security internal\nadmin@labsystem1.burlington (tenant[name=dev.engineering])# show\nname         dev.engineering\ndescription  "development team"\nsecurity     internal\n\nmember       HQnetwork\n    neighborhood  HQnetwork\n    address       172.17.2.0/25\nexit\n')),Object(r.b)("p",null,"This configuration fragment establishes the user population within the subnet 172.17.2.0/25 as members of the dev.engineering team. The 128T router uses dotted notation to indicate tenant parentage: dev.engineering is a child of engineering. The dotted notation is not limited to one level of depth, a tenant family can have an arbitrarily large number of descendants (e.g., eastcoast.dev.engineering, or bldg12.eastcoast.dev.engineering)."),Object(r.b)("p",null,"Irrespective of the number of levels of the tenant hierarchy, the same rule applies: children have access to services offered by their parents, but parents do not have access to services offered by their children."),Object(r.b)("h2",{id:"the-global-tenant"},"The Global Tenant"),Object(r.b)("p",null,"We've discussed two ways that tenancy can be determined on a 128T router: by assigning a tenant to an interface, or by creating neighborhood-based ",Object(r.b)("em",{parentName:"p"},"tenant members"),", that can use the source IP address within a neighborhood to glean tenancy. If neither of these rulesets apply \u2013 a packet arrives on an interface without a ",Object(r.b)("inlineCode",{parentName:"p"},"tenant")," assigned, and neither does it match a tenant's ",Object(r.b)("inlineCode",{parentName:"p"},"member")," definition for the neighborhood(s) on that interface \u2013 then the tenancy of that session is said to be assigned to the ",Object(r.b)("em",{parentName:"p"},"global tenant"),', which is also sometimes referred to as "tenantless."'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@labsystem1.fiedler# show fib router newton\nMon 2019-01-21 06:18:00 EST\n\nNode: labsystem2.newton\n\nEntry Count: 2255\nCapacity:    17402\n\n============ ======= ======= =================== ========================= ==============\n IP Prefix    Port    Proto   Tenant              Service                   Next Hops\n============ ======= ======= =================== ========================= ==============\n 0.0.0.0/8    <any>   <any>   <global>             <ControlMessageService>   <none>\n 0.0.0.0/8    <any>   <any>   guest                <ControlMessageService>   <none>\n 0.0.0.0/8    <any>   <any>   trusted              <ControlMessageService>   <none>\n")),Object(r.b)("p",null,"The services that are available to this tenant are limited to only those whose ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"public")," \u2013 there is no means for otherwise creating an ",Object(r.b)("inlineCode",{parentName:"p"},"access-policy")," that specifies whether the global tenant has access to a service."),Object(r.b)("p",null,'The net result of this "global" tenant is that a 128T router can operate without any tenant definitions whatsoever: assuming all service configurations have their ',Object(r.b)("inlineCode",{parentName:"p"},"scope")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"public"),", then the router's FIB is unilaterally applied to all inbound packets, making the 128T behave akin to a traditional router. But what's the fun in that?"))}d.isMDXComponent=!0},238:function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},h=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(t),u=a,m=h["".concat(o,".").concat(u)]||h[u]||b[u]||r;return t?i.a.createElement(m,s({ref:n},l,{components:t})):i.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);