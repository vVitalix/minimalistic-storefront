import React, { Component } from "react";
import { connect } from "react-redux";
//REDUCERS
import { setAttributePlp } from "../../features/productList/productListSlice";
import { setAttributePdp } from "../../features/product/productSlice";

class ProductAttributes extends Component {
  render() {
    const { id, attributes, selectedAttributes, setAttributeFromPlp } = this.props;

    return (
      <div>
        {attributes &&
          attributes.map(attribute =>
            attribute.type === "swatch" ? (
              <div key={attribute.id}>
                <h6>{attribute.name}:</h6>

                <ul>
                  {attribute.items.map(item => (
                    <li
                      key={item.id}
                      onClick={() => {
                        if (setAttributeFromPlp === "disabled") return;
                        setAttributeFromPlp
                          ? this.props.setAttributePlp({ id, attribute, item })
                          : this.props.setAttributePdp({ attribute, item });
                      }}
                      className={
                        selectedAttributes.attributes.find(
                          selectedAttribute =>
                            selectedAttribute.items[0].id === item.id &&
                            selectedAttribute.id === attribute.id
                        )
                          ? "selected"
                          : ""
                      }
                      style={{
                        backgroundColor: `${item.value}`,
                        width: "2rem",
                        height: "2rem",
                      }}
                    ></li>
                  ))}
                </ul>
              </div>
            ) : (
              <div key={attribute.id}>
                <h6>{attribute.name}:</h6>

                <ul>
                  {attribute.items.map(item => (
                    <li
                      key={item.id}
                      onClick={() => {
                        if (setAttributeFromPlp === "disabled") return;
                        setAttributeFromPlp
                          ? this.props.setAttributePlp({ id, attribute, item })
                          : this.props.setAttributePdp({ attribute, item });
                      }}
                      className={
                        selectedAttributes.attributes.find(
                          selectedAttribute =>
                            selectedAttribute.items[0].id === item.id &&
                            selectedAttribute.id === attribute.id
                        )
                          ? "selected"
                          : ""
                      }
                      style={{
                        width: "63px",
                        height: "45px",
                      }}
                    >
                      {item.displayValue}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    setAttributePlp,
    setAttributePdp,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProductAttributes);
